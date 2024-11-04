"use client";

import { useAppContext } from "@/app/context/AppContext";
import { aspectRatios, models, styles } from "@/constants";
import { close, frame } from "@/public/assets";
import Image from "next/image";
import { Slider } from "./ui/slider";

const Sidebar = () => {
  const {
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
    setModel,
    model,
    show,
    setShow,
  } = useAppContext();

  return (
    <div
      className={`bg-n-14 max-lg:fixed max-lg:top-0 transition-all duration-200 space-y-6 lg:space-y-0  ${
        show ? "max-lg:left-0 w-full sm:max-w-96" : "max-lg:-left-[25rem] w-fit"
      } max-lg:z-40 lg:flex h-full px-5 py-2 lg:mt-[7.5rem] rounded-lg flex-col gap-5`}
    >
      <div className="flex justify-between items-center">
        <h4 className="h4">General Settings</h4>
        <div
          className="bg-n-14 border flex items-center justify-center rounded-lg h-fit p-1 lg:hidden"
          onClick={() => setShow(!show)}
        >
          <Image src={close} height={30} width={30} alt="close" />
        </div>
      </div>

      <h6 className="h6">Models</h6>
      <div className="flex gap-2">
        {models.map((item) => (
          <div
            key={item.id}
            className={`bg-n-14 py-1 px-2 rounded-2xl cursor-pointer bg-cover flex items-center justify-center border-[3px] border-[#1d1833] hover:border-[#a073ff] transition duration-200 ${
              model === item.title && "border-[#a073ff]"
            }`}
            style={{ backgroundImage: `url(${item.image})` }}
            onClick={() => setModel(item.title)}
          >
            <span>{item.title}</span>
          </div>
        ))}
      </div>

      <h6 className="h6">Styles</h6>
      <div className="flex gap-2.5">
        {styles.map((item, index) => (
          <div
            key={item.id}
            className={`bg-n-14 h-[5.5rem] w-[7rem] rounded-2xl bg-cover flex justify-center items-end border-[#161227] border hover:border-[#a073ff] transition duration-500 cursor-pointer ${
              style === item.title && "border-[#a073ff]"
            }`}
            style={{
              backgroundImage: index === 0 ? "none" : `url(${item.image})`,
            }}
            onClick={() => {
              setStyle(item.title);
            }}
          >
            {index === 0 ? (
              <div className="bg-n-15 h-[5.5rem] w-[7rem] rounded-2xl flex flex-col items-center justify-center gap-3">
                <Image src={frame} width={22} height={22} alt="Frame" />
                <span>{item.title}</span>
              </div>
            ) : (
              <span className="bg-n-15 w-full text-center rounded-b-xl">
                {item.title}
              </span>
            )}
          </div>
        ))}
      </div>

      <h6 className="h6">Number of Images</h6>
      <div className="flex gap-3">
        {["1", "2", "3", "4"].map((item, index) => (
          <div
            key={index}
            className={`px-4 cursor-pointer py-1 border border-[#494261] rounded-full text-center flex items-center justify-center ${
              numImages == item && "border-[#a073ff]"
            }`}
            onClick={() => setNumImages(item)}
          >
            {item}
          </div>
        ))}
      </div>

      <h6 className="h6">Aspect Ratio</h6>
      <div className="flex gap-3">
        {aspectRatios.map((item) => (
          <div
            key={item.id}
            className={`w-[5rem] py-1 h-[5rem] bg-n-15 flex flex-col items-center justify-end rounded-lg gap-3 cursor-pointer ${
              aspectRatio === item.title && "border border-[#a073ff]"
            }`}
            onClick={() => setAspectRatio(item.title)}
          >
            <Image src={item.image} width={25} height={25} alt="rectangle" />
            <p>{item.title}</p>
          </div>
        ))}
      </div>

      <div>
        {aspectRatio === "Custom" && (
          <>
            <h6 className="h6">Width</h6>
            <div className="flex gap-4">
              <Slider
                defaultValue={[width]}
                min={512}
                max={1280}
                step={8}
                onValueChange={(value) => setWidth(value[0])}
              />
              <div className="bg-n-15 px-4 py-2 rounded-lg">W: {width} px</div>
            </div>

            <h6 className="h6">Height</h6>
            <div className="flex gap-4">
              <Slider
                defaultValue={[height]}
                min={512}
                max={1280}
                step={8}
                onValueChange={(value) => setHeight(value[0])}
              />
              <div className="bg-n-15 px-4 py-2 rounded-lg">H: {height} px</div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
