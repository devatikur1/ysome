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

  // when chnage this  "isReSideBarShow" then set value in this
  useEffect(() => {
    localStorage.setItem("isReSideBarShow", JSON.stringify(isReSideBarShow));
  }, [isReSideBarShow]);

  // some
  const [HomePageWidth, setHomePageWidth] = useState(window.innerWidth);
  const [HomePageHeight, setHomePageHeight] = useState(
    window.innerHeight - 60
  );
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
      setHomePageHeight(window.innerHeight - 60);
      if (window.innerWidth <= 768) {
        setHomePageOutletWidth(window.innerWidth);
      } else {
        let width = window.innerWidth - (isReSideBarShow ? 260 : 60);
        setHomePageOutletWidth(width);
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

    // future values like theme, modalOpen, etc. will go here
  };

  return <UiContext.Provider value={value}>{children}</UiContext.Provider>;
}
