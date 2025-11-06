import React from "react";

export default function ReccomendLoadingPart() {
  return (
    <aside className="w-full flex flex-col gap-2 animate-fadeIn">
      {/* 🔹 Thumbnail Skeleton */}
      <div className="relative w-full h-[170px] sm:h-[180px] md:h-[190px] lg:h-[200px] rounded-xl overflow-hidden bg-gradient-to-br from-gray-700 via-gray-600 to-gray-700">
        <div className="absolute inset-0 shimmer" />
      </div>

      {/* 🔹 Text Skeleton */}
      <div className="space-y-2 mt-2">
        {/* Title */}
        <div className="relative w-[85%] h-4 rounded-md overflow-hidden bg-gradient-to-br from-gray-700 via-gray-600 to-gray-700">
          <div className="absolute inset-0 shimmer" />
        </div>

        {/* Channel name */}
        <div className="relative w-[60%] h-3 rounded-md overflow-hidden bg-gradient-to-br from-gray-700 via-gray-600 to-gray-700">
          <div className="absolute inset-0 shimmer" />
        </div>
      </div>

      {/* 🔹 CSS Animations */}
      <style>{`
        @keyframes shimmerMove {
          0% { transform: translateX(-100%) rotate(90deg); opacity: 0.3; }
          50% { opacity: 0.8; }
          100% { transform: translateX(100%) rotate(90deg); opacity: 0.3; }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }

        .shimmer {
          background: linear-gradient(
            0deg,
            transparent 0%,
            rgba(255, 255, 255, 0.8) 50%,
            transparent 100%
          );
          animation: shimmerMove 1.6s infinite linear;
          background-size: 200% 100%;
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
      `}</style>
    </aside>
  );
}
