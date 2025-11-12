import { Link } from "react-router-dom";
import React, { useState } from "react";

export default function SearchVideosParts({ item }) {
  const [showRich, setShowRich] = useState(false);

  const handleTouch = () => {
    setShowRich(true);
    setTimeout(() => setShowRich(false), 3000);
  };

  return (
    <section
      className="hover:scale-[1.01] transition-transform duration-300"
      onMouseEnter={() => setShowRich(true)}
      onMouseLeave={() => setShowRich(false)}
      onTouchStart={handleTouch}
    >
      <article className="flex flex-col gap-3 w-full">
        {/* Thumbnail */}
        <Link
          to={`/watch?v=${item?.videoId}`}
          className="block w-full aspect-video rounded-xl overflow-hidden border border-border relative"
        >
          {!showRich ? (
            <img
              loading="lazy"
              className="w-full h-full object-cover rounded-xl transition-opacity duration-300"
              src={item?.thumbnail?.[1]?.url || item?.thumbnail?.[0]?.url}
              alt={item?.title}
            />
          ) : (
            item?.richThumbnail?.[0]?.url && (
              <img
                loading="lazy"
                className="absolute top-0 left-0 w-full h-full object-cover rounded-xl transition-opacity duration-300"
                src={item?.richThumbnail?.[0]?.url}
                alt="Preview"
              />
            )
          )}
        </Link>

        {/* Video Info */}
        <article className="flex gap-4">
          <Link
            to={`/@${item?.channelHandle?.replace("@", "")}`}
            className="min-w-10 max-w-10 h-10 max-h-10"
          >
            <img
              className="w-full h-full rounded-full object-cover border border-border"
              src={
                item?.channelAvatar?.[0]?.url ||
                item?.channelThumbnail?.[0]?.url
              }
              alt={item?.channelTitle}
            />
          </Link>

          <div className="flex flex-col justify-start overflow-hidden">
            <Link to={`/watch?v=${item?.videoId}`}>
              <h3 className="line-clamp-2 text-[0.85rem] lg:text-[0.95rem] font-medium text-text/95 leading-snug mb-0.5">
                {item?.title}
              </h3>
            </Link>

            <Link to={`/${item?.channelHandle?.replace("@", "")}`}>
              <p className="text-[0.75rem] lg:text-[0.9rem] truncate text-subtext/90">
                {item?.channelTitle}
              </p>
            </Link>

            <div className="flex items-center gap-1 text-xs lg:text-sm text-neutral-400 mt-1">
              <span className="text-white/80 font-medium">
                {item?.viewCountText}
              </span>
              <span aria-hidden="true" className="text-neutral-500">
                •
              </span>
              <time className="text-neutral-400" dateTime={item?.publishedAt}>
                {item?.publishedTimeText}
              </time>
            </div>
          </div>
        </article>
      </article>
    </section>
  );
}
