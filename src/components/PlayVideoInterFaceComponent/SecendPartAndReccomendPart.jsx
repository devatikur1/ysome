import React from "react";
import { Link } from "react-router-dom";

export default function SecendPartAndReccomendPart({
  reccomendVideoItem,
  ReccomendLoading,
}) {
  return (
    <section className="relative w-full md:w-1/3 md:h-full grid sm:grid-cols-2 gap-4">
      
      {/* When reccomendVideoItem Video Loading */}
      {reccomendVideoItem?.map((item) => {
        return (
          <Link
            key={item?.id}
            to={`/watch?v=${item?.id}`}
            className="hover:scale-[1.01] transition-transform duration-300"
          >
            <article className="flex flex-col gap-3 w-full">
              {/* Thumbnail */}
              <div className="w-full aspect-video rounded-xl overflow-hidden border border-border">
                <img
                  loading="lazy"
                  className="w-full h-full object-cover"
                  src={item?.thumbnails[1]?.url}
                  alt={item?.title || "Video Thumbnail"}
                />
              </div>

              {/* Video Info */}
              <div className="flex flex-col justify-start overflow-hidden">
                {/* Title */}
                <h3 className="line-clamp-2 text-[0.85rem] lg:text-[0.95rem] font-medium text-text/95 leading-snug mb-0.5">
                  {item?.title}
                </h3>

                <div className="w-full flex justify-between items-center">
                  {/* Channel Name */}
                  <p className="text-[0.75rem] lg:text-[0.9rem] truncate text-subtext/90">
                    {item?.name || item?.channel?.name}
                  </p>

                  {/* Published Time */}
                  <div className="flex items-center gap-1 text-xs lg:text-sm text-neutral-400 mt-1">
                    <time dateTime={item?.publishedTimeText}>
                      {item?.publishedTimeText}
                    </time>
                  </div>
                </div>
              </div>
            </article>
          </Link>
        );
      })}

      {/* When Reccomend Video Loading */}
      {ReccomendLoading &&
        [...Array(23)].map((_, i) => (
          <aside
            key={i}
            className="w-full max-h-[500px] min-h-[500px] overflow-hidden duration-300"
          >
            <section className="flex flex-col gap-3 w-full">
              {/* Thumbnail */}
              <div className="w-full h-[190px] sm:h-[280px] md:h-[300px] lg:h-[210px] xl:h-[240px] 2xl:h-[325px] rounded-xl bg-gray-300 dark:bg-gray-700 overflow-hidden relative">
                <div className="absolute inset-0 animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-30 -translate-x-full" />
              </div>

              {/* Video Info */}
              <div className="flex items-start gap-3 px-1">
                {/* Channel Avatar */}
                <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-700 flex-shrink-0 relative overflow-hidden">
                  <div className="absolute inset-0 animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-30 -translate-x-full" />
                </div>

                {/* Text Lines */}
                <div className="flex-1 space-y-2">
                  <div className="h-4 w-[90%] rounded-md bg-gray-300 dark:bg-gray-700 relative overflow-hidden">
                    <div className="absolute inset-0 animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-30 -translate-x-full" />
                  </div>

                  <div className="h-3 w-1/3 rounded-md bg-gray-200 dark:bg-gray-600 relative overflow-hidden">
                    <div className="absolute inset-0 animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-30 -translate-x-full" />
                  </div>

                  <div className="h-2.5 w-1/2 rounded-md bg-gray-200 dark:bg-gray-600 relative overflow-hidden">
                    <div className="absolute inset-0 animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-30 -translate-x-full" />
                  </div>
                </div>
              </div>
            </section>

            {/* Custom shimmer animation */}
            <style>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
          </aside>
        ))}
    </section>
  );
}
