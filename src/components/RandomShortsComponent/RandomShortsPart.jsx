import { MoveDown, MoveUp, Volume2, VolumeX } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import moment from "moment";
import millify from "millify";

export default function RandomShortsPart({
  style,
  HomePageHeight,
  item,
  isPrevDisabled,
  isNextDisabled,
  nextVid,
  prevVid,
}) {
  const [isMuted, setIsMuted] = useState(true); // ✅ শুরুতে muted থাকবে
  const [active, setActive] = useState(true); // ✅ শুরুতে muted থাকবে
  const playerRef = useRef(null); // ✅ iframe reference

  // ✅ Mute/Unmute toggle করার function
  const toggleMute = () => {
    if (playerRef.current) {
      if (isMuted) {
        // Unmute করার command
        playerRef.current.contentWindow.postMessage(
          '{"event":"command","func":"unMute","args":""}',
          "*"
        );
      } else {
        // Mute করার command
        playerRef.current.contentWindow.postMessage(
          '{"event":"command","func":"mute","args":""}',
          "*"
        );
      }
      setIsMuted(!isMuted);
    }
  };

  return (
    <article className="relative w-full md:w-[420px] lg:w-[460px] xl:w-[450px] h-full flex gap-6 justify-center items-end overflow-hidden">
      <section
        style={style}
        className="relative w-full h-full flex justify-center items-center overflow-hidden bg-black rounded-2xl"
      >
        {active === true ? (
          <>
            {/* ✅ YouTube Video Player */}
            <article className="relative w-full h-full">
              <div className="relative w-full h-full overflow-hidden">
                <iframe
                  ref={playerRef}
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${item?.id?.videoId}?autoplay=1&mute=1&enablejsapi=1&playsinline=1&controls=0&modestbranding=1`}
                  title={item?.snippet?.title || "YouTube Shorts"}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="rounded-2xl"
                ></iframe>

                {/* ✅ Top overlay - title/logo hide */}
                <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b bg-black to-transparent pointer-events-none z-10"></div>

                {/* ✅ Bottom overlay - controls hide  */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t bg-black pointer-events-none z-10"></div>
              </div>
              <button
                onClick={toggleMute}
                className="absolute bottom-24 left-4 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 z-10"
              >
                {isMuted ? (
                  <VolumeX size={24} strokeWidth={2} />
                ) : (
                  <Volume2 size={24} strokeWidth={2} />
                )}
              </button>
            </article>
          </>
        ) : (
          <>
            {/* ✅ YouTube Video Player */}
            <article className="relative w-full h-full">
              <div className="relative w-full h-full flex justify-center items-center overflow-hidden">
                <img
                  className="w-full"
                  src={item.snippet.thumbnails.high.url}
                  alt=""
                />
              </div>
              <div className="absolute w-full h-full flex justify-center items-center overflow-hidden">
                <div>

                </div>
              </div>
            </article>
          </>
        )}
      </section>

      {/* ✅ Right Side Buttons (Like, Comment, Share, Description) */}
      <section
        style={{ height: `${HomePageHeight}px` }}
        className="fixed right-10 flex flex-col justify-center items-center md:hidden -translate-y-3 gap-6 z-20"
      >
        <button
          onClick={prevVid}
          disabled={isPrevDisabled}
          className="pointer-events-auto w-[60px] h-[60px] bg-black/50 hover:bg-black/70 hover:scale-[0.95] transition-all duration-300 rounded-full flex justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm"
        >
          <MoveUp size={25} strokeWidth={2} className="text-white" />
        </button>

        <button
          onClick={nextVid}
          disabled={isNextDisabled}
          className="pointer-events-auto w-[60px] h-[60px] bg-black/50 hover:bg-black/70 hover:scale-[0.95] transition-all duration-300 rounded-full flex justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm"
        >
          <MoveDown size={25} strokeWidth={2} className="text-white" />
        </button>
      </section>
    </article>
  );
}
