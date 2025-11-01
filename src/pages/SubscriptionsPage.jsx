import React, { useEffect, useRef, useState } from "react";
import AllSubscriptionsPart from "../components/SubscriptionsComponent/AllSubscriptionsPart";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import clsx from "clsx";

export default function SubscriptionsPage() {
  const [showActivity, setShowActivity] = useState(false);
  const [activeOptionName, setActiveOptionName] = useState(0);
  const seceltionRef = useRef(null);
  const optionRef = useRef(null);
  // const [showActivity, setShowActivity] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        seceltionRef.current &&
        !seceltionRef.current.contains(e.target) &&
        optionRef.current &&
        !optionRef.current.contains(e.target)
      ) {
        setShowActivity(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <section className="px-5 py-12 flex flex-col justify-start items-center select-none *:select-none">
      <article className="md:w-[80%] lg:w-[90%] xl:w-[60%] h-full flex flex-col gap-20 relative">
        <section className=" flex justify-between items-center">
          <h1 className="text-4xl font-semibold">All subscriptions</h1>
          <div
            ref={optionRef}
            onClick={(p) => setShowActivity(!showActivity)}
            className="bg-surface hover:bg-bg-pecondary transition-all duration-300 rounded-full py-1.5 px-5 flex justify-between items-center gap-3"
          >
            <span className="text-sm font-semibold text-subtext">
              New activity
            </span>{" "}
            <div>
              <ChevronDown color={"#b8b8b8"} size={22} />
            </div>
          </div>
        </section>
        <AllSubscriptionsPart activeOptionName={activeOptionName} />
        <AnimatePresence>
          {showActivity === true && (
            <motion.div
              ref={seceltionRef}
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
              className="absolute top-12 right-0 bg-bg-pecondary rounded-2xl px-2 py-2 overflow-hidden w-[150px]"
            >
              <article className="flex flex-col gap-1">
                <div
                  onClick={() => {
                    setActiveOptionName(0);
                    setShowActivity(false);
                  }}
                  className={clsx(
                    activeOptionName === 0 && "bg-bg",
                    "hover:bg-bg px-4 py-1.5 rounded-xl"
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
                    "hover:bg-bg px-4 py-1.5 rounded-xl"
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
                    "hover:bg-bg px-4 py-1.5 rounded-xl"
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
