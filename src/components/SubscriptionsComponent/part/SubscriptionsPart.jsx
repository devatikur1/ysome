import React from "react";
import millify from "millify";
import { NavLink } from "react-router-dom";

export default function ChannelCard({ cid, channel, UnSubscribe }) {
  console.log(channel);

  return (
    <article className="flex items-center justify-between w-full gap-5 p-3 py-5 hover:bg-neutral-900/40 rounded-2xl transition-all duration-200 cursor-pointer">
      {/* Left: Photo */}
      <NavLink to={`/${channel?.snippet?.customUrl}`} className="flex-shrink-0">
        <img
          src={channel?.snippet?.thumbnails?.high?.url}
          alt={channel?.snippet?.title}
          className="h-[95px] w-[95px] rounded-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </NavLink>

      {/* Middle: Info */}
      <div
        className="flex flex-col flex-1 min-w-0"
      >
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-semibold truncate">
              {channel?.snippet?.title}
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-1 text-sm text-subtext mt-[2px]">
          <span className="truncate text-subtext/80">
            {channel?.snippet?.customUrl}
          </span>
          {channel?.statistics?.subscriberCount && (
            <>
              <span>•</span>
              <span className="text-subtext/80 text-xs">
                {millify(Number(channel?.statistics?.subscriberCount + 1))}{" "}
                subscribers
              </span>
            </>
          )}
        </div>

        <pre
          className="text-sm text-text/80 mt-2 line-clamp-2"
          title={channel?.snippet?.description}
        >
          {channel?.snippet?.description}
        </pre>
      </div>

      {/* Right: Subscribe Button */}
      <section
        onClick={async () => await UnSubscribe({ cdId: cid })}
        className="hidden md:flex"
      >
        <button className="bg-surface text-text px-4 py-1.5 rounded-full text-sm font-medium border border-border transition">
          Subscribed
        </button>
      </section>
    </article>
  );
}
