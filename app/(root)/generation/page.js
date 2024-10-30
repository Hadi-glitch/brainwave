"use client";

import { useAppContext } from "@/app/context/AppContext";
import Prompt from "@/components/Prompt";
import Sidebar from "@/components/Sidebar";
import { convertAspectRatio } from "@/lib/utils";
import { useEffect, useState } from "react";

const Page = () => {
  const {
    prompt,
    setPrompt,
    style,
    setStyle,
    numImages,
    setNumImages,
    aspectRatio,
    setAspectRatio,
    width,
    setWidth,
    height,
    setHeight,
    model,
    show,
  } = useAppContext();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [dimensions, setDimensions] = useState("");
  const [imagesArray, setImagesArray] = useState([]);
  const [generating, setGenerating] = useState(false);

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

      // Create an array of objects for the current response's data
      const newImageData = [
        {
          generationTime: data.generationTime,
          images: data.output, // Assuming data.output is an array of image URLs
          prompt,
          width: data.meta.width,
          height: data.meta.height,
        },
      ];

      // Update the imagesArray state by adding the new array
      setImagesArray((prevImages) => [...prevImages, newImageData]);
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
      className={`flex flex-col md:flex-row h-[90vh] lg:h-[85vh] lg:mx-10  ${
        show ? "p-0" : "max-lg:px-6"
      }`}
    >
      <Sidebar />
      <Prompt
        imagesArray={imagesArray}
        generateImage={generateImage}
        generating={generating}
        loading={loading}
        error={error}
      />
    </div>
  );
};

export default Page;
