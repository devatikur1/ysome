import { Link } from "react-router-dom";


export default function SearchVideosParts({ item }) {
  return (
    <section className="hover:scale-[1.01] transition-transform duration-300">
      <article className="flex flex-col gap-3 w-full">
        {/* Thumbnail */}
        <Link
          to={`/watch?v=${item?.videoId}`}
          className="block w-full aspect-video rounded-xl overflow-hidden border border-border relative"
        >
          <img
            loading="lazy"
            className="w-full h-full object-cover rounded-xl transition-opacity duration-300"
            src={item?.thumbnail?.[1]?.url || item?.thumbnail?.[0]?.url}
            alt={item?.title}
          />
        </Link>

        {/* Video Info */}
        <article className="flex gap-4">
          <Link
            to={`/channel/@${item?.channelHandle?.replace("@", "")}`}
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
