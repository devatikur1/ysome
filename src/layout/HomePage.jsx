/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import SideBar from "../components/sidebar/SideBar";
import { Outlet } from "react-router-dom";
import { UiContext } from "../contexts/Ui/UiContext";
import { AnimatePresence, motion } from "motion/react";

export default function HomePage() {
  // UiContext
  const { HomePageWidth, HomePageHeight, HomePageOutletWidth } =
    useContext(UiContext);

  const [Height, setHeight] = useState(window.innerWidth);

  useEffect(() => {
    setHeight(window.innerWidth);
  }, [HomePageWidth]);

  return (
    <section
      className="w-full flex md:items-start md:justify-start items-center justify-center overflow-hidden"
      style={{
        maxHeight: `${HomePageHeight}px`,
        maxWidth: `${HomePageWidth}px`,
        minHeight: `${HomePageHeight}px`,
        minWidth: `${HomePageWidth}px`,
      }}
    >
      <AnimatePresence>
        {Height > 768 && (
          <SideBar Height={HomePageHeight} type="relative" />
        )}
      </AnimatePresence>
      <div
        style={{
          maxWidth: `${HomePageOutletWidth}px`,
          maxHeight: `${HomePageHeight}px`,
          minWidth: `${HomePageOutletWidth}px`,
          minHeight: `${HomePageHeight}px`,
        }}
        className="overflow-y-auto transition-all duration-30"
      >
        <Outlet />
      </div>
    </section>
  );
}
