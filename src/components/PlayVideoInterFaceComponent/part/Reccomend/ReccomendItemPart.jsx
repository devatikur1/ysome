import React from "react";
import { Link } from "react-router-dom";

export default function ReccomendItemPart({ item }) {
  return (
    <Link to={`/watch?v=${item?.id}`}>
      <article className="flex flex-col gap-3 w-full">
        {/* Thumbnail */}
        <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-border">
          <img
            loading="lazy"
            className="w-full h-full object-cover"
            src={item?.thumbnails[1]?.url}
            alt={item?.title || "Video Thumbnail"}
          />
          <span className="absolute bottom-2 right-2 bg-bg px-2 rounded-2xl">
            {item?.lengthText}
          </span>
        </div>

        {/* Video Info */}
        <div className="flex flex-col justify-start overflow-hidden">
          {/* Title */}
          <h3 className="line-clamp-2 text-[0.85rem] lg:text-[0.95rem] font-medium text-text/95 leading-snug mb-0.5">
            {item?.title}
          </h3>

          <div className="w-full flex justify-between items-center">
            {/* Channel Name */}
            <Link
              to={item?.channel?.handle}
              className="text-[0.75rem] lg:text-[0.9rem] truncate text-subtext/90 hover:text-text transition-all duration-300"
            >
              {item?.name || item?.channel?.name}
            </Link>

            {/* Published Time */}
            <div className="flex items-center gap-1 text-xs lg:text-sm text-neutral-400 mt-1">
              <span className="text-subtext">{item?.viewCountText}</span>
              <span aria-hidden="true">•</span>
              <time className="text-subtext" dateTime={item?.publishedTimeText}>
                {item?.publishedTimeText}
              </time>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
