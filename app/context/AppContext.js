"use client";

import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [prompt, setPrompt] = useState("");
  const [style, setStyle] = useState("No Style");
  const [numImages, setNumImages] = useState(1);
  const [aspectRatio, setAspectRatio] = useState("1:1");
  const [width, setWidth] = useState(512);
  const [height, setHeight] = useState(512);
  const [model, setModel] = useState("Visora");
  const [show, setShow] = useState(false);
  const [credits, setCredits] = useState(0)
  const [userId, setUserId] = useState(null)
  const [currentUser, setCurrentUser] = useState(null)

  return (
    <AppContext.Provider
      value={{
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
        setModel,
        show,
        setShow,
        credits,
        setCredits,
        userId,
        setUserId,
        currentUser,
        setCurrentUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
