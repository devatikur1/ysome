import React, { useState } from "react";
import AllSubscriptionsPart from "../components/SubscriptionsComponent/AllSubscriptionsPart";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

export default function SubscriptionsPage() {
  const [showActivity, setShowActivity] = useState(false);
  return (
    <section className="px-5 py-12 flex flex-col justify-start items-center select-none *:select-none">
      <article className="w-[55%] h-full flex flex-col gap-20 relative">
        <section className=" flex justify-between items-center">
          <h1 className="text-4xl font-semibold">All subscriptions</h1>
          <div
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
        <AllSubscriptionsPart />
        <AnimatePresence>
          {showActivity === true && (
            <motion.div
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
              className="absolute top-12 right-0 bg-bg-pecondary rounded-2xl px-2 py-2 overflow-hidden"
            >
              <article className="flex flex-col gap-1">
                <div className="hover:bg-bg px-7 py-1.5 rounded-xl">
                  Most relevant
                </div>
                <div className="hover:bg-bg px-7 py-1.5 rounded-xl">
                  New activity
                </div>
                <div className="hover:bg-bg px-7 py-1.5 rounded-xl">A-Z</div>
              </article>
            </motion.div>
          )}
        </AnimatePresence>
      </article>
    </section>
  );
}
