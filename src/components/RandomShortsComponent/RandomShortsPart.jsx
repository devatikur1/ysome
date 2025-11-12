import { MoveDown, MoveUp, Volume2, VolumeX, Pause, Play } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function RandomShortsPart({
  style,
  HomePageHeight,
  VideoID,
  item,
  channelData,
  isPrevDisabled,
  isNextDisabled,
  nextVid,
  prevVid,
}) {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showPlayIcon, setShowPlayIcon] = useState(false);
  const playerRef = useRef(null);

  useEffect(() => {
    document.title = item?.snippet?.title;
    setIsMuted(true);
  }, [VideoID, item?.snippet?.title]);

  useEffect(() => {
    if (playerRef.current) {
      const msg = isMuted
        ? '{"event":"command","func":"mute","args":""}'
        : '{"event":"command","func":"unMute","args":""}';
      playerRef.current.contentWindow.postMessage(msg, "*");
    }
  }, [item?.id?.videoId, isMuted]);

  useEffect(() => {
    if (playerRef.current) {
      const msg = isPlaying
        ? '{"event":"command","func":"playVideo","args":""}'
        : '{"event":"command","func":"pauseVideo","args":""}';
      playerRef.current.contentWindow.postMessage(msg, "*");
    }
  }, [item?.id?.videoId, isPlaying]);

  const toggleMute = () => setIsMuted((prev) => !prev);

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
    setShowPlayIcon(true);
    setTimeout(() => setShowPlayIcon(false), 500);
  };

  return (
    <article className="relative w-full md:w-[420px] lg:w-[460px] xl:w-[450px] h-full flex gap-6 justify-center items-end overflow-hidden">
      <section
        style={style}
        className="relative w-full h-full flex justify-center items-center overflow-hidden bg-black rounded-2xl"
      >
        <article className="relative w-full h-full">
          <div
            className="relative w-full h-full overflow-hidden cursor-pointer"
            onClick={togglePlayPause}
          >
            {/* YouTube iframe */}
            <iframe
              ref={playerRef}
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${VideoID}?autoplay=1&mute=1&enablejsapi=1&playsinline=1&controls=0&modestbranding=1`}
              title={item?.snippet?.title || "YouTube Shorts"}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="rounded-2xl"
            ></iframe>

            {/* Play/Pause Overlay */}
            <AnimatePresence>
              {showPlayIcon && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 1.5, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex justify-center items-center pointer-events-none"
                >
                  <div className="bg-black/60 p-6 rounded-full backdrop-blur-sm">
                    {isPlaying ? (
                      <Pause
                        size={45}
                        strokeWidth={2}
                        className="text-white fill-white"
                      />
                    ) : (
                      <Play
                        size={45}
                        strokeWidth={2}
                        className="text-white fill-white"
                      />
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Bottom overlay */}
            <div className="absolute bottom-0 left-0 right-0 w-full h-32 py-5 bg-black pointer-events-none z-40">
              <div className="w-full h-full flex justify-between items-end px-4 pointer-events-auto">
                <div className="w-[85%] flex flex-col gap-5">
                  <Link
                    to={`/channel/${channelData?.snippet?.customUrl}`}
                    className="flex items-center gap-1.5"
                  >
                    <img
                      className="w-[28px] rounded-full"
                      src={channelData?.snippet?.thumbnails?.high?.url}
                      alt={channelData?.snippet?.customUrl}
                    />
                    <p className="text-[0.9rem] font-medium text-subtext">
                      {channelData?.snippet?.customUrl}
                    </p>
                  </Link>
                  <h3 className="text-text text-sm font-semibold line-clamp-2">
                    {item?.snippet?.title}
                  </h3>
                </div>

                <div className="w-[15%] flex justify-end">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleMute();
                    }}
                    className="bg-bg hover:bg-bg-Primary text-white p-2 rounded-full backdrop-blur-sm transition-all duration-300 z-30"
                  >
                    {isMuted ? (
                      <VolumeX size={15} strokeWidth={2} />
                    ) : (
                      <Volume2 size={15} strokeWidth={2} />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>

      {/* Right Side Navigation */}
      <section
        style={{ height: `${HomePageHeight}px` }}
        className="fixed right-10 flex flex-col justify-center items-center md:hidden -translate-y-3 gap-6 z-30"
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
