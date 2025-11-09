import React from "react";

export default function YouTubeLoading() {
    
  return (
    <aside className="w-full max-h-[260px] min-h-[260px] overflow-hidden duration-300">
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
  );
}
