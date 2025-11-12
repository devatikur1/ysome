import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion, useScroll } from "motion/react";
import clsx from "clsx";
import { FirebaseContext } from "../contexts/Firebase/FirebaseContext";
import { UiContext } from "../contexts/Ui/UiContext";
import { GetUsd } from "../contexts/Firebase/Firestore/GetUsd";
import AlliHstorysCom from "../components/HistoryComponent/AlliHstorysCom";

export default function HistoryPage() {
  // --------------------------------------
  // 1️⃣ All State and ref
  // --------------------------------------
  const [showActivity, setShowActivity] = useState(false);
  const [activeOptionName, setActiveOptionName] = useState(0);
  const selectionRef = useRef(null);
  const optionRef = useRef(null);
  const { auth, his } = useContext(FirebaseContext);
  const { HomePageOutletWidth, HomePageHeight , gridCols} = useContext(UiContext);

  let {
    historys,
    setHistorys,
    historylastVisible,
    setHistorylastVisible,
    historyLoading,
    setHistoryLoading,
  } = his;

  let { userID, getLastVisible } = auth;

  const containerRef = useRef(null);
  const scrollTriggeredRef = useRef(false);

  // --------------------------------------
  // 2️⃣ Handle click outside dropdown
  // --------------------------------------
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        selectionRef.current &&
        !selectionRef.current.contains(e.target) &&
        optionRef.current &&
        !optionRef.current.contains(e.target)
      ) {
        setShowActivity(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    document.title = "All subscriptions";
  }, []);

  // --------------------------------------
  // 3️⃣ INFINITE SCROLL FOR SUBSCRIPTIONS
  // --------------------------------------
  const { scrollYProgress } = useScroll({ container: containerRef });

  const handleScrollChange = useCallback(async (value) => {
    if (
      value > 0.85 &&
      !historyLoading &&
      historylastVisible &&
      historylastVisible?.id &&
      !scrollTriggeredRef.current
    ) {
      console.log("Scroll progress:", value);
      scrollTriggeredRef.current = true;
      setHistoryLoading(true);

      try {
        // Call your function to fetch more subscriptions

        const data = await GetUsd({
          userId: userID,
          subCollection: "like",
          pageSize: 20,
          lastDoc: historylastVisible,
        });
        if (data && Array.isArray(data) && data.length > 0) {
          const lastVisible = getLastVisible(data, 20);

          setHistorys((prev) => {
            const merged = [...prev, ...data];
            const uniqueMap = new Map();
            merged.forEach((item) => {
              uniqueMap.set(item.id, item);
            });
            return Array.from(uniqueMap.values());
          });

          setHistorylastVisible(lastVisible);
        }
      } catch (error) {
        console.error("Infinite scroll fetch failed:", error);
      } finally {
        setTimeout(() => {
          setHistoryLoading(false);
          scrollTriggeredRef.current = false;
        }, 500);
      }
    }
  }, [getLastVisible, historyLoading, historylastVisible, setHistoryLoading, setHistorylastVisible, setHistorys, userID]);

  useEffect(() => {
    if (!scrollYProgress) return;
    const unsubscribe = scrollYProgress.on("change", handleScrollChange);
    return () => unsubscribe?.();
  }, [scrollYProgress, handleScrollChange]);

  return (
    <section
      ref={containerRef}
      style={{
        width: `${HomePageOutletWidth - 3}px`,
        height: `${HomePageHeight}px`,
        minWidth: `${HomePageOutletWidth - 3}px`,
        minHeight: `${HomePageHeight}px`,
      }}
      className="h-full flex flex-col justify-start items-center select-none *:select-none overflow-y-auto"
    >
      <article className="w-full md:w-[80%] lg:w-[90%] xl:w-[60%] h-full flex flex-col gap-14 relative px-2 md:px-5 py-8">
        <section className="w-full flex justify-between items-center px-2">
          <h1 className="text-xl lg:text-4xl font-semibold">
            All History Video
          </h1>
          <div
            ref={optionRef}
            onClick={() => setShowActivity(!showActivity)}
            className="bg-surface hover:bg-bg-pecondary transition-all duration-300 rounded-full py-1.5 lg:py-1.5 px-3 lg:px-5 flex justify-between items-center gap-3 cursor-pointer"
          >
            <span className="text-[0.7rem] text-sm font-semibold text-subtext">
              New activity
            </span>
            <div>
              <ChevronDown color={"#b8b8b8"} size={20} />
            </div>
          </div>
        </section>
        <AlliHstorysCom
          historys={historys}
          activeOptionName={activeOptionName}
          historyLoading={historyLoading}
          gridCols={gridCols}
        />
        <AnimatePresence>
          {showActivity && (
            <motion.div
              ref={selectionRef}
              initial={{
                height: 0,
              }}
              animate={{
                height: "auto",
              }}
              exit={{
                height: 0,
              }}
              transition={{
                duration: 0.2,
              }}
              className="absolute top-20 right-5 bg-bg-pecondary rounded-2xl px-2 py-2 overflow-hidden w-[150px] shadow-lg z-10"
            >
              <article className="flex flex-col gap-1">
                <div
                  onClick={() => {
                    setActiveOptionName(0);
                    setShowActivity(false);
                  }}
                  className={clsx(
                    activeOptionName === 0 && "bg-bg",
                    "hover:bg-bg px-4 py-1.5 rounded-xl text-[0.9rem] cursor-pointer transition-colors"
                  )}
                >
                  Latest
                </div>
                <div
                  onClick={() => {
                    setActiveOptionName(1);
                    setShowActivity(false);
                  }}
                  className={clsx(
                    activeOptionName === 1 && "bg-bg",
                    "hover:bg-bg px-4 py-1.5 rounded-xl text-[0.9rem] cursor-pointer transition-colors"
                  )}
                >
                  Oldest
                </div>

                <div
                  onClick={() => {
                    setActiveOptionName(2);
                    setShowActivity(false);
                  }}
                  className={clsx(
                    activeOptionName === 2 && "bg-bg",
                    "hover:bg-bg px-4 py-1.5 rounded-xl text-[0.9rem] cursor-pointer transition-colors"
                  )}
                >
                  A-Z
                </div>
              </article>
            </motion.div>
          )}
        </AnimatePresence>
      </article>
    </section>
  );
}
