/* eslint-disable no-unused-vars */
import clsx from "clsx";
import { ChevronLeft, SearchIcon } from "lucide-react";
import React, { useContext, useEffect, useRef, useState } from "react";
import SearchPart from "./SearchPart";
import { motion, AnimatePresence } from "motion/react";
import { UiContext } from "../../../contexts/Ui/UiContext";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../contexts/App/AppContext";

export default function Search({
  SearchFeedRef,
  setIsSearchShow,
  isSearchShow,
}) {
  const [inputFocus, setInputFocus] = useState(false);
  const [parentHeight, setParentHeight] = useState(window.innerHeight);
  const [searchFeedHeight, setSearchFeedHeight] = useState(0);
  const [index, setIndex] = useState(10);
  const inputRef = useRef(null);
  const searchOptionRef = useRef(null);
  const formRef = useRef(null);
  const [prompt, setPrompt] = useState(window.innerHeight);
  const navigate = useNavigate();

  const { queries, addQuery } = useContext(AppContext);

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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIndex(10);
        if (queries.length === 0) {
          setSearchFeedHeight(`${80}px`);
        } else {
          setSearchFeedHeight(`${40 * queries.slice(0, 10).length + 103}px`);
          if (window.innerHeight < 621) {
            setSearchFeedHeight(`${window.innerHeight - 70}px`);
          }
        }
      } else {
        setIndex(queries.length);
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
  }, [parentHeight, window.innerHeight, queries.length]);

  return (
    <aside className="fixed top-0 md:top-[62px] w-full flex justify-center items-center z-50">
      <motion.section
        ref={SearchFeedRef}
        initial={{ height: 0 }}
        animate={{
          height: searchFeedHeight,
        }}
        exit={{ height: 0 }}
        transition={{
          duration: 0.4,
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
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Search..."
              className="w-full bg-bg-Primary px-3 py-2 text-sm outline-none rounded-l-xl"
              type="text"
            />
            <button
              type="button"
              onClick={() => {
                addQuery({ text: prompt });
                setIsSearchShow(false);
                navigate(`/search?q=${encodeURIComponent(prompt)}`);
              }}
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
            queries.length === 0 && "flex md:hidden"
          )}
        >
          {queries.slice(0, index).map((s, i) => {
            let isLast = queries.length - 1 === i;
            return (
              <SearchPart
                key={i}
                isLast={isLast}
                text={s.text}
                navigate={navigate}
                setIsSearchShow={setIsSearchShow}
              />
            );
          })}
          {queries.length === 0 && (
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
