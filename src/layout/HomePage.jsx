/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import SideBar from "../components/sidebar/SideBar";
import { Outlet } from "react-router-dom";
import { UiContext } from "../contexts/Ui/UiContext";
import { motion } from "motion/react";

export default function HomePage() {
  const [parentWidth, setParentWidth] = useState(window.innerWidth);
  const [Height, setHeight] = useState(`${window.innerHeight - 60}px`);
  const {
    // relative sidebar
    isReSideBarShow,
  } = useContext(UiContext);

  useEffect(() => {
    const handleResize = () => {
      setHeight(`${window.innerHeight - 60}px`);
      if (parentWidth > 768) {
        setParentWidth(window.innerWidth);
      } else {
        let width = window.innerWidth + (isReSideBarShow ? 250 : 60);
        setParentWidth(width);
      }
    };

    
    // add listener
    window.addEventListener("resize", handleResize);

    // cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      className="w-full flex justify-start"
      style={{ maxHeight: Height }} // ✅ inline style for dynamic height
    >
      {parentWidth > 768 && <SideBar Height={Height} type="relative" />}
      <motion.div
        initial={{
          width: isReSideBarShow
            ? `${parentWidth - 250}px`
            : `${parentWidth - 60}px`,
          opacity: 0,
        }}
        animate={{
          width: isReSideBarShow
            ? `${parentWidth - 250}px`
            : `${parentWidth - 60}px`,
          opacity: 1,
        }}
        exit={{ width: 0, opacity: 0 }}
        className="flex-1 overflow-y-auto transition-all duration-30"
      >
        <Outlet />
      </motion.div>
    </section>
  );
}
