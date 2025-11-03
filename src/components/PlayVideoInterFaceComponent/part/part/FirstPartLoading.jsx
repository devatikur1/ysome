import React from 'react'

export default function FirstPartLoading() {
  return (
    <div className="space-y-5 p-5 relative w-full h-[80%]">
      {/* 🔹 Custom shimmer animation */}
      <style>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .custom-shimmer::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 50%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          );
          animation: shimmer 1.5s infinite;
        }
      `}</style>

      {/*  Video Player */}
      <div className="w-full h-full bg-gray-300 dark:bg-gray-700 relative overflow-hidden rounded-md custom-shimmer"></div>

      {/*  Title */}
      <div className="w-3/4 h-6 bg-gray-300 dark:bg-gray-700 relative overflow-hidden rounded custom-shimmer"></div>

      {/*  Channel Info */}
      <div className="flex items-center gap-3 mt-5">
        <div className="w-12 h-12 rounded-full bg-gray-300 dark:bg-gray-700 relative overflow-hidden custom-shimmer"></div>
        <div className="flex-1 space-y-2">
          <div className="w-1/2 h-4 bg-gray-300 dark:bg-gray-700 relative overflow-hidden rounded custom-shimmer"></div>
          <div className="w-1/4 h-3 bg-gray-300 dark:bg-gray-700 relative overflow-hidden rounded custom-shimmer"></div>
        </div>
      </div>
    </div>
  );
}
