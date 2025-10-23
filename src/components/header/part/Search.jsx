/* eslint-disable no-unused-vars */
import clsx from "clsx";
import { ChevronLeft, SearchIcon } from "lucide-react";
import React, { useContext, useEffect, useRef, useState } from "react";
import SearchPart from "./SearchPart";
import { motion, AnimatePresence } from "motion/react";
import { UiContext } from "../../../contexts/Ui/UiContext";

export default function Search({ SearchFeedRef, setIsSearchShow }) {
  const [inputFocus, setInputFocus] = useState(false); // input focus styling
  const [parentHeight, setParentHeight] = useState(window.innerHeight); // window height
  const [searchFeedHeight, setSearchFeedHeight] = useState(0); // window height
  const [index, setIndex] = useState(10); // কতগুলো result show হবে
  const inputRef = useRef(null); // input focus detect
  const searchOptionRef = useRef(null); // scroll container
  const formRef = useRef(null); // formRef container

  // resize listener
  useEffect(() => {
    const handleResize = () => setParentHeight(window.innerHeight);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // click outside input
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        setInputFocus(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const some = [
    { text: "React Hooks introduction" },
    { text: "Next.js server actions guide" },
    { text: "TailwindCSS responsive design tips" },
    { text: "Firebase vs Supabase: which to choose?" },
    { text: "How to build a search dropdown UI" },
    { text: "Debounce vs Throttle in JavaScript" },
    { text: "Dark mode UI pattern best practices" },
    { text: "LocalStorage vs SessionStorage difference" },
    { text: "Web accessibility (a11y) fundamentals" },
    { text: "React + Motion animations examples" },
    { text: "Advanced event listeners in JS" },
    { text: "Custom scrollbar styling with CSS" },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIndex(10);
        if (some.length === 0) {
          setSearchFeedHeight(`${80}px`);
        } else {
          setSearchFeedHeight(`${40 * some.slice(0, 10).length + 103}px`);
          if (window.innerHeight < 621) {
            setSearchFeedHeight(`${window.innerHeight - 70}px`);
          }
        }
      } else {
        setIndex(some.length);
        setSearchFeedHeight("100vh");
      }
    };

    // initial call
    handleResize();

    // add listener
    window.addEventListener("resize", handleResize);

    // cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [parentHeight, window.innerHeight, some.length]);

  return (
    <aside className="fixed top-0 md:top-[62px] w-full flex justify-center items-center z-50">
      <motion.section
        ref={SearchFeedRef}
        initial={{ opacity: 0, scale: 0.95, height: 0 }}
        animate={{
          opacity: 1,
          scale: 1,
          height: searchFeedHeight,
        }}
        exit={{ opacity: 0, scale: 0.95, height: 0 }}
        transition={{
          duration: 0.4,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className={`flex flex-col gap-5 max-h-[${searchFeedHeight}] min-h-[0px] w-screen md:w-[600px] lg:w-[700px] xl:w-[45%] bg-bg-pecondary p-5 border border-border md:rounded-2xl shadow-lg overflow-hidden`}
      >
        <section className="flex w-full gap-2">
          <article
            onClick={() => setIsSearchShow(false)}
            className="flex md:hidden"
          >
            <div className="hover:bg-hover transition-all duration-300 p-0.5 w-full h-full rounded-full flex justify-center items-center">
              <ChevronLeft size={18} color={"#eeeeee"} />
            </div>
          </article>
          <form
            ref={formRef}
            className={clsx(
              inputFocus ? "border-accent" : "border-border",
              "flex items-center border rounded-xl transition-all duration-300 w-full"
            )}
          >
            <input
              ref={inputRef}
              onFocus={() => setInputFocus(true)}
              placeholder="Search..."
              className="w-full bg-bg-Primary px-3 py-2 text-sm outline-none rounded-l-xl"
              type="text"
            />
            <button
              type="submit"
              className={clsx(
                "bg-bg-pecondary px-3 py-2 border-l transition-all duration-300 rounded-r-xl",
                inputFocus ? "border-accent" : "border-border"
              )}
            >
              <SearchIcon size={20} />
            </button>
          </form>
        </section>

        <section
          ref={searchOptionRef}
          className={clsx(
            "flex flex-col h-full border border-border rounded-xl overflow-x-hidden overflow-y-auto custom-scroll",
            some.length === 0 && "flex md:hidden"
          )}
        >
          {some.slice(0, index).map((s, i) => {
            let isLast = some.length - 1 === i;
            return <SearchPart key={i} isLast={isLast} text={s.text} />;
          })}
          {some.length === 0 && (
            <article
              className={clsx(
                "w-full h-full flex justify-center items-center",
                "flex md:hidden"
              )}
            >
              <div className="text-subtext">Please search something...</div>
            </article>
          )}
        </section>
      </motion.section>
    </aside>
  );
}
