"use client";

import { useAppContext } from "@/app/context/AppContext";
import Alert from "@/components/Alert";
import Prompt from "@/components/Prompt";
import Sidebar from "@/components/Sidebar";
import {
  getUserById,
  getUserCredits,
  getUserId,
  setUserCredits,
  updateUserCredits,
} from "@/lib/actions/user.actions";
import { convertAspectRatio, resetPlan } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";

const Page = () => {
  const {
    numImages,
    aspectRatio,
    width,
    setWidth,
    height,
    setHeight,
    show,
    credits,
    setCredits,
    userId,
    setUserId,
  } = useAppContext();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [dimensions, setDimensions] = useState("");
  const [imagesArray, setImagesArray] = useState([]);
  const [generating, setGenerating] = useState(false);
  const { user } = useUser();
  const [showAlert, setShowAlert] = useState(false);
  const [userPlan, setUserPlan] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const fetchUserId = async () => {
      if (user?.id) {
        try {
          const fetchedUserId = await getUserId(user.id);
          setUserId(fetchedUserId);
        } catch (error) {
          console.error("Error fetching user ID:", error);
        }
      }
    };
    fetchUserId();
  }, [user?.id]);

  useEffect(() => {
    const fetchUserCredits = async () => {
      if (userId) {
        try {
          const fetchedCredits = await getUserCredits(userId);
          setCredits(fetchedCredits);
        } catch (error) {
          console.error("Error fetching credits:", error);
        }
      }
    };
    fetchUserCredits();
  }, [userId]);

  useEffect(() => {
    const checkPlan = async () => {
      if (!userId) return;

      try {
        const newUser = await getUserById(userId);
        setCurrentUser(newUser);

        if (user) {
          setUserPlan(user.plan);

          const lastReset = new Date(newUser.lastCreditReset);
          const currentDate = new Date();

          // Calculate days since last reset
          const daysSinceReset = Math.floor(
            (currentDate - lastReset) / (1000 * 60 * 60 * 24)
          );

          // If it's been 30 days since last reset
          if (daysSinceReset >= 30) {
            await setUserCredits(
              userId,
              user.plan === "Pro" ? 1500 : 150,
              user.plan
            );
          }
        }
      } catch (error) {
        console.error("Error checking plan:", error);
      }
    };

    checkPlan();
  }, [userId, user]);

  // If you need to monitor currentUser changes, use a separate useEffect
  useEffect(() => {
    console.log("Current user updated:", currentUser);
  }, [currentUser]);

  useEffect(() => {
    if (aspectRatio && aspectRatio !== "Custom") {
      const newDimensions = convertAspectRatio(aspectRatio.toString(), 512);
      setDimensions(newDimensions);
      setWidth(newDimensions.width);
      setHeight(newDimensions.height);
    } else if (aspectRatio === "Custom") {
      setWidth(width);
      setHeight(height);
    }
  }, [aspectRatio]);

  const generateImage = async (prompt) => {
    if (prompt === "") return;

    if (credits < 5) {
      setShowAlert(true);
      return;
    }

    setLoading(true);
    setError(null);
    setGenerating(true);

    const negativePrompt = "bad quality";

    try {
      const response = await fetch("/api/generateImage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt,
          negative_prompt: negativePrompt,
          samples: numImages,
          width: width,
          height: height,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data);

      const newImageData = [
        {
          generationTime: data.generationTime,
          images: data.output,
          prompt,
          width: data.meta.width,
          height: data.meta.height,
        },
      ];

      setImagesArray((prevImages) => [...prevImages, newImageData]);

      const updatedCredits = await updateUserCredits(userId, -5);
      setCredits(updatedCredits);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
      setGenerating(true);
    }

    console.log(imagesArray);
    console.log(prompt);
  };

  return (
    <div
      className={`flex flex-col md:flex-row h-[90vh] lg:h-[85vh] lg:mx-10 ${
        show ? "p-0" : "max-lg:px-6"
      }`}
    >
      <Sidebar />
      <Prompt
        credits={credits}
        imagesArray={imagesArray}
        generateImage={generateImage}
        generating={generating}
        loading={loading}
        error={error}
      />
      {showAlert && <Alert setShowAlert={setShowAlert} />}
    </div>
  );
};

export default Page;
