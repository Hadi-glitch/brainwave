"use client";

import { useAppContext } from "@/app/context/AppContext";
import {
  bgImage,
  copy,
  crown,
  dice,
  download,
  repeat,
  settings,
  star,
} from "@/public/assets";
import Image from "next/image";
import { useState } from "react";
import Loader from "./Loader";
import { saveAs } from "file-saver";
import { getRandomPrompt } from "@/lib/utils";
import { randomPrompts } from "@/constants";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Bounce } from "react-toastify";

const Prompt = ({
  generateImage,
  imagesArray,
  generating,
  loading,
  credits,
}) => {
  const { prompt, setPrompt, height, width, numImages, show, setShow } =
    useAppContext();
  const [isHovered, setIsHovered] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);

      if (copied) {
        toast("Prompt copied successfully!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
      }
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const handleDownload = (imageUrl) => {
    saveAs(imageUrl, "brainwave-ai-image.jpg");
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div
        className={`h-full w-full flex flex-col gap-32 mt-[6rem] lg:mt-[7.5rem] ${
          generating && "overflow-hidden"
        } relative lg:mx-10`}
      >
        <div className="flex justify-between items-center lg:hidden w-full max-w-[45rem] self-center">
          <div
            className="bg-n-14 h-fit p-3 rounded-lg lg:hidden"
            onClick={() => setPrompt(getRandomPrompt(randomPrompts))}
          >
            <Image src={dice} width={40} height={40} alt="dice" />
          </div>
          <div className="flex items-center justify-center">
            <div className="bg-n-14 my-5 flex lg:hidden mx-6 rounded-xl py-2.5 px-3 gap-2 w-fit self-end">
              <div className="bg-n-15 flex text-lg items-center justify-center text-center gap-1 px-3 py-1 font-bold rounded-xl">
                <span className="text-center">{credits}</span>
                <Image src={star} width={15} height={15} alt="star" />
              </div>

              <button className="bg-[#3F1564] px-2 flex items-center justify-center gap-1 rounded-lg cursor-pointer hover:bg-[#30114b]">
                <Image src={crown} width={15} height={15} alt="crown" />
                <span className="text-[#AC6AFF] font-bold text-center">
                  Upgrade
                </span>
              </button>
            </div>
            <div
              className="h-fit bg-n-14 p-2 rounded-md lg:hidden"
              onClick={() => setShow(!show)}
            >
              <Image src={settings} width={35} height={35} alt="settings" />
            </div>
          </div>
        </div>
        {generating ? (
          <div className="flex flex-col gap-3 overflow-y-scroll scrollbar-hide h-full lg:mb-[13rem] mt-28 lg:mt-0">
            {imagesArray.map((images, index) => (
              <div key={index}>
                {images.map((image, index) => (
                  <div key={index}>
                    <div className="flex items-center gap-2 my-2">
                      <p className="text-lg break-words text-white bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent shadow-lg overflow-hidden whitespace-nowrap text-ellipsis max-w-96">
                        {image.prompt}
                      </p>
                      <Image
                        onClick={() => handleCopy(image.prompt)}
                        src={copy}
                        height={30}
                        width={30}
                        alt="copy"
                        className="hover:bg-n-15 cursor-pointer rounded-lg p-1 transition-all duration-300 ease-in-out"
                      />
                      <Image
                        onClick={() => {
                          generateImage(image.prompt);
                          setPrompt(image.prompt);
                        }}
                        src={repeat}
                        height={28}
                        width={28}
                        alt="repeat"
                        className="hover:bg-n-15 cursor-pointer rounded-lg p-1 transition-all duration-300 ease-in-out"
                      />
                    </div>

                    <div className="flex flex-wrap gap-4 max-sm:items-center max-sm:justify-center">
                      {image.images.map((imageUrl) => (
                        <div
                          key={index}
                          style={{
                            width: `${image.width / 2}px`,
                            height: `${image.height / 2}px`,
                          }}
                          className="bg-n-15 overflow-hidden rounded-md cursor-pointer relative group"
                        >
                          <Image
                            src={imageUrl}
                            width={image.width}
                            height={image.height}
                            alt={`ai-image-${index + 1}`}
                          />
                          <div className="absolute top-0 left-0 bg-black bg-opacity-20 m-2 p-1 rounded-lg backdrop-blur-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            {image.generationTime}
                          </div>
                          <div
                            onClick={() => handleDownload(imageUrl)}
                            className="absolute top-0 right-0 bg-black bg-opacity-20 m-2 p-1 rounded-lg backdrop-blur-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                          >
                            <Image
                              src={download}
                              width={30}
                              height={30}
                              alt="download"
                              className="hover:bg-white hover:bg-opacity-20 rounded-lg group-hover:inline-block"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
            {loading && (
              <div className="flex items-center gap-2">
                <p className="text-lg break-words text-white bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent shadow-lg overflow-hidden whitespace-nowrap text-ellipsis w-96">
                  {prompt}
                </p>
                <Image
                  onClick={() => handleCopy(prompt)}
                  src={copy}
                  height={30}
                  width={30}
                  alt="copy"
                  className="hover:bg-n-15 cursor-pointer rounded-lg p-1 transition-all duration-300 ease-in-out"
                />
                <Image
                  src={repeat}
                  height={28}
                  width={28}
                  alt="repeat"
                  className="hover:bg-n-15 cursor-pointer rounded-lg p-1 transition-all duration-300 ease-in-out"
                />
              </div>
            )}
            <div className="flex gap-4 flex-wrap max-sm:items-center max-sm:justify-center">
              {loading &&
                Array.from({ length: numImages }, (_, i) => (
                  <div
                    key={i}
                    className="bg-n-15 overflow-hidden rounded-md flex items-center justify-center"
                    style={{
                      width: `${width / 2}px`,
                      height: `${height / 2}px`,
                    }}
                  >
                    <div className="flex flex-wrap">
                      <Loader />
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ) : (
          <div className="bg-[#161328] w-full md:h-[34rem] lg:w-[34rem] max-w-[34rem] mt-36 lg:mt-0 rounded-xl bg-cover self-center">
            <Image
              src={bgImage}
              width={600}
              height={600}
              alt="image"
              className="rounded-xl"
            />
          </div>
        )}

        <div className="bg-n-14 h-[12rem] w-full max-w-[45rem] rounded-2xl px-8 py-6  max-lg:top-24 absolute lg:bottom-0 self-center">
          <div className="bg-n-15 w-full h-[7rem] rounded-2xl relative">
            <div className="gap-2 items-center absolute top-2 left-4 mt-1 hidden lg:flex">
              <Image
                src={dice}
                width={25}
                height={25}
                alt="dice"
                className="cursor-pointer"
                onClick={() => setPrompt(getRandomPrompt(randomPrompts))}
              />
              <div className="bg-white h-4 w-[1px]"></div>
            </div>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="border border-transparent focus:border-[#a073ff] focus:border-opacity-100 rounded-2xl w-full h-full bg-transparent text-white resize-none focus:outline-none px-4 lg:px-0 lg:pl-16 pt-2 transition-all duration-300 shadow-sm focus:shadow-lg"
              placeholder='Try something like "Futuristic city skyline at sunset with neon lights."'
            />
          </div>

          <div className="w-full flex items-center justify-end mt-1.5">
            <button
              className={`relative overflow-hidden rounded-lg px-6 py-2 font-semibold text-white transition-all duration-300 ease-out ${
                isHovered
                  ? "bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-700 shadow-[0_0_15px_rgba(147,51,234,0.5)]"
                  : "bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 shadow-[0_0_5px_rgba(147,51,234,0.3)]"
              }`}
              onClick={() => {
                generateImage(prompt)
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span className="relative z-10">Generate</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Prompt;
