import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import AllSubscriptionsPart from "../components/SubscriptionsComponent/AllSubscriptionsPart";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion, useScroll } from "motion/react";
import clsx from "clsx";
import { FirebaseContext } from "../contexts/Firebase/FirebaseContext";

export default function SubscriptionsPage() {
  // --------------------------------------
  // 1️⃣ All State and ref
  // --------------------------------------
  const [showActivity, setShowActivity] = useState(false);
  const [activeOptionName, setActiveOptionName] = useState(0);
  const selectionRef = useRef(null);
  const optionRef = useRef(null);
  const { sub } = useContext(FirebaseContext);

  let {
    subscriptions,
    UnSubscribe,
    SubLoding,
    subscriptionslastVisible,
    fetchMoreSubscriptions,
  } = sub;

  const containerRef = useRef(null);
  const scrollTriggeredRef = useRef(false);

  // --------------------------------------
  // Handle click outside dropdown
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
  // 2️⃣ INFINITE SCROLL FOR SUBSCRIPTIONS
  // --------------------------------------
  const { scrollYProgress } = useScroll({ container: containerRef });

  const handleScrollChange = useCallback(
    async (value) => {
      console.log("Scroll progress:", value);

      if (
        value > 0.85 &&
        !SubLoding &&
        subscriptionslastVisible &&
        !scrollTriggeredRef.current
      ) {
        scrollTriggeredRef.current = true;

        try {
          console.log("Fetching more subscriptions...");
          // Call your function to fetch more subscriptions
          if (fetchMoreSubscriptions) {
            await fetchMoreSubscriptions(subscriptionslastVisible);
          }
        } catch (error) {
          console.error("Infinite scroll fetch failed:", error);
        } finally {
          // Small delay to prevent rapid firing
          setTimeout(() => {
            scrollTriggeredRef.current = false;
          }, 500);
        }
      }
    },
    [SubLoding, subscriptionslastVisible, fetchMoreSubscriptions]
  );

  useEffect(() => {
    if (!scrollYProgress) return;
    const unsubscribe = scrollYProgress.on("change", handleScrollChange);
    return () => unsubscribe?.();
  }, [scrollYProgress, handleScrollChange]);

  return (
    <section
      ref={containerRef}
      className="w-full h-full px-5 py-12 flex flex-col justify-start items-center select-none *:select-none overflow-y-auto"
    >
      <article className="w-full md:w-[80%] lg:w-[90%] xl:w-[60%] h-full flex flex-col gap-20 relative">
        <section className="w-full flex justify-between items-center">
          <h1 className="text-xl lg:text-4xl font-semibold">
            All subscriptions
          </h1>
          <div
            ref={optionRef}
            onClick={() => setShowActivity(!showActivity)}
            className="bg-surface hover:bg-bg-pecondary transition-all duration-300 rounded-full py-1.5 lg:py-1.5 px-3 lg:px-5 flex justify-between items-center gap-3 cursor-pointer"
          >
            <span className="text-[0.758rem] text-sm font-semibold text-subtext">
              New activity
            </span>
            <div>
              <ChevronDown color={"#b8b8b8"} size={22} />
            </div>
          </div>
        </section>
        <AllSubscriptionsPart
          subscriptions={subscriptions}
          activeOptionName={activeOptionName}
          UnSubscribe={UnSubscribe}
          SubLoding={SubLoding}
        />
        <AnimatePresence>
          {showActivity === true && (
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
              className="absolute top-12 right-0 bg-bg-pecondary rounded-2xl px-2 py-2 overflow-hidden w-[150px] shadow-lg z-10"
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
                  Oldest
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
                  Latest
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
