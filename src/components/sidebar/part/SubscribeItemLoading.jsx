import React from "react";

export default function SubscribeItemLoading() {
  return (
    <div
      className="w-full bg-transparent border border-transparent
      hover:bg-bg-pecondary hover:border-border transition-all duration-300 flex
      items-center justify-start gap-3 px-3 py-2 mb-1 rounded-xl animate-pulse"
    >
      {/* Left: Channel photo skeleton */}
      <div className="flex justify-center items-center">
        <div className="w-[30px] h-[30px] rounded-full bg-neutral-700" />
      </div>

      {/* Right: Channel name skeleton */}
      <div className="w-[80%] flex flex-col justify-end gap-1">
        <div className="h-4 w-[80%] bg-neutral-700 rounded" />
      </div>
    </div>
  );
}
