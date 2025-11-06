import React from 'react'

export default function SubscriptionsLoding() {
  return (
    <div className="flex items-center justify-between w-full gap-5 p-3 py-5 rounded-2xl animate-pulse bg-neutral-900/40">
      {/* Left: Photo skeleton */}
      <div className="flex-shrink-0">
        <div className="h-[95px] w-[95px] rounded-full bg-neutral-700" />
      </div>

      {/* Middle: Info skeleton */}
      <div className="flex flex-col flex-1 min-w-0 gap-3">
        {/* Channel Name */}
        <div className="h-4 w-1/3 bg-neutral-700 rounded"></div>

        {/* Subscriber count */}
        <div className="flex items-center gap-2">
          <div className="h-3 w-16 bg-neutral-700 rounded"></div>
          <div className="h-3 w-10 bg-neutral-700 rounded"></div>
        </div>

        {/* Description */}
        <div className="flex flex-col gap-2 mt-2">
          <div className="h-3 w-full bg-neutral-700 rounded"></div>
          <div className="h-3 w-5/6 bg-neutral-700 rounded"></div>
        </div>
      </div>

      {/* Right: Subscribe button skeleton */}
      <div className="hidden md:flex">
        <div className="h-8 w-24 bg-neutral-700 rounded-full"></div>
      </div>
    </div>
  );
}
