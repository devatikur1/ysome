import {
  MoveDown,
  MoveUp,
  Heart,
  MessageCircle,
  Share2,
} from "lucide-react";
import React, { useState } from "react";
import DescriptionIcon from "../../others/DescriptionIcon";
import { AnimatePresence, motion } from "motion/react";

export default function RandomShortsPart({ style, snippet }) {
  const [IsShowDes, setIsShowDes] = useState(false);
  return (
    <aside className="relative w-[40%] h-[100%] flex gap-6 justify-center items-end overflow-hidden">
      <section
        style={style}
        className="relative w-[80%] h-[100%] flex justify-center items-center overflow-hidden bg-black rounded-2xl"
      >
        {/* Thumbnail as background */}
        <article className="w-full h-full">
          <img
            src={"https://i.ibb.co/9mxNn8Pv/videoframe-290.png"}
            alt={snippet?.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </article>
        motion
        <AnimatePresence>
          {IsShowDes && (
            <motion.article
              initial={{ height: 0 }}
              animate={{
                height: "auto",
              }}
              exit={{ height: 0 }}
              transition={{
                duration: 0.5
              }}
              className="absolute bottom-0 flex flex-col justify-start bg-bg-Primary w-full px-5 py-5 gap-2"
            >
              <h2 className="font-semibold text-xl text-text pb-2">
                Description
              </h2>
              <hr className="h-[1px] border-none bg-border" />
              <div className="py-1">
                <p className="text-subtext text-[0.9rem]">{snippet?.title}</p>
              </div>
              <hr className="h-[1px] border-none bg-border" />
              <div className="flex justify-between w-full px-6 mt-5">
                {/* Likes */}

                <article
                  className="flex flex-col items-center justify-around"
                  aria-label="208 thousand likes"
                >
                  <span className="text-[1rem]">
                    <span>208K</span>
                  </span>
                  <span>
                    <span className="text-xs text-subtext">Likes</span>
                  </span>
                </article>

                {/* Views */}

                <article
                  className="flex flex-col items-center justify-center"
                  aria-label="9,694,478 views"
                >
                  <span>
                    <span>9,694,478</span>
                  </span>
                  <span>
                    <span className="text-xs text-subtext">Views</span>
                  </span>
                </article>

                {/* Upload Date */}

                <article
                  className="flex flex-col items-center justify-center"
                  aria-label="Oct 17, 2025"
                >
                  <span className="ytwFactoidRendererValue">
                    <span>Oct 17</span>
                  </span>
                  <span className="ytwFactoidRendererLabel">
                    <span className="text-xs text-subtext">2025</span>
                  </span>
                </article>
              </div>
              <div className="bg-surface text-subtext mx-5 mt-5 rounded-md px-4 py-2">
                {snippet?.description}
              </div>
            </motion.article>
          )}
        </AnimatePresence>
      </section>

      {/* Right Side Actions */}
      <section className="-translate-y-3 flex flex-col items-center justify-center gap-6">
        <article className="flex flex-col items-center gap-1">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-all cursor-pointer">
            <Heart size={24} className="text-text" />
          </div>
          <span className="text-text text-xs font-semibold">12.5K</span>
        </article>

        <article className="flex flex-col items-center gap-1">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-all cursor-pointer">
            <MessageCircle size={24} className="text-text" />
          </div>
          <span className="text-text text-xs font-semibold">1.2K</span>
        </article>

        <article className="flex flex-col items-center gap-1">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-all cursor-pointer">
            <Share2 size={24} className="text-text" />
          </div>
          <span className="text-text text-xs font-semibold">Share</span>
        </article>

        <article
          onClick={() => setIsShowDes((p) => !p)}
          className="flex flex-col items-center gap-1"
        >
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-all cursor-pointer">
            <div>
              <DescriptionIcon size={24} className="text-text" />
            </div>
          </div>

          <span className="text-text text-xs font-semibold">Description</span>
        </article>
      </section>
    </aside>
  );
}
