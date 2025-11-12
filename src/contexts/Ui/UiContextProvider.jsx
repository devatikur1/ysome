/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import { UiContext } from "./UiContext";

export default function UiContextProvider({ children }) {
  const [isSearchShow, setIsSearchShow] = useState(false);
  const searchBtnRef = useRef(null);
  const [isNotificationShow, setNotificationShow] = useState(false);
  const notificationBtnRef = useRef(null);
  const [isReSideBarShow, setIsReSideBarShow] = useState(() => {
    const saved = localStorage.getItem("isReSideBarShow");
    return saved !== null ? JSON.parse(saved) : true;
  });

  // Grid Columns
  const [gridCols, setGridCols] = useState("grid-cols-1");

  // when chnage this  "isReSideBarShow" then set value in this
  useEffect(() => {
    localStorage.setItem("isReSideBarShow", JSON.stringify(isReSideBarShow));
  }, [isReSideBarShow]);

  // some
  const [HomePageWidth, setHomePageWidth] = useState(window.innerWidth);
  const [HomePageHeight, setHomePageHeight] = useState(window.innerHeight - 60);
  const [HomePageOutletWidth, setHomePageOutletWidth] = useState(() => {
    if (window.innerWidth <= 768) {
      return window.innerWidth;
    } else {
      let width = window.innerWidth - (isReSideBarShow ? 260 : 60);
      return width;
    }
  });

  // -------------------------
  // Change main page size with reload nad resize
  // -------------------------

  useEffect(() => {
    const handleResize = () => {
      setHomePageWidth(window.innerWidth);

      if (window.innerWidth <= 768) {
        setHomePageOutletWidth(window.innerWidth);
        setHomePageHeight(window.innerHeight - 60 - 60);
      } else {
        let width = window.innerWidth - (isReSideBarShow ? 260 : 60);
        setHomePageOutletWidth(width);
        setHomePageHeight(window.innerHeight - 60);
      }
    };

    handleResize();

    // add listener
    window.addEventListener("resize", handleResize);

    // cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isReSideBarShow]);

  // -------------------------
  // Update grid columns
  // -------------------------

  useEffect(() => {
    if (HomePageOutletWidth >= 1920) setGridCols("grid-cols-4");
    else if (HomePageOutletWidth >= 1024) setGridCols("grid-cols-3");
    else if (HomePageOutletWidth >= 768) setGridCols("grid-cols-2");
    else setGridCols("grid-cols-1");
  }, [isReSideBarShow, HomePageOutletWidth]);

  // context value
  const value = {
    // Search
    isSearchShow,
    setIsSearchShow,
    searchBtnRef,

    // Notifications
    isNotificationShow,
    setNotificationShow,
    notificationBtnRef,

    // relative sidebar
    isReSideBarShow,
    setIsReSideBarShow,

    // some
    HomePageWidth,
    HomePageHeight,
    HomePageOutletWidth,

    gridCols,

    // future values like theme, modalOpen, etc. will go here
  };

  return <UiContext.Provider value={value}>{children}</UiContext.Provider>;
}
