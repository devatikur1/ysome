import moment from "moment";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GetChannelData } from "../../utils/GetChannelData";
import millify from "millify";
import profile from "../../assets/emptyProfilePic.jpg";

export default function RandomVideosPart({ item, apikey, setPageError }) {
  const [time, setTime] = useState("");
  const [channelAvatar, setChannelAvatar] = useState(profile);
  const [viewCount, setViewCount] = useState(
    150000
  );
  const [username, setUserName] = useState("@something");

  useEffect(() => {
    let date = moment(item?.snippet?.publishTime).fromNow();
    let dateArr = date.split(" ");

    if (dateArr[0] === "a") {
      setTime(`1 ${dateArr[1]}`);
    } else {
      setTime(date);
    }

    // 📺 Get Channel Avatar
    async function fetchChannelData() {
      try {
        const channel = await GetChannelData(item?.snippet?.channelId, apikey);
        setChannelAvatar(channel?.snippet?.thumbnails);
        if (channel?.snippet?.thumbnails?.default?.url) {
          setChannelAvatar(channel?.snippet?.thumbnails?.default?.url);
          setViewCount(channel?.statistics?.viewCount);
          setUserName(channel?.snippet?.customUrl);
        }
      } catch (err) {
        console.error("Fetch Data Error:" + err);
        setPageError(true);
      }
    }

    fetchChannelData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item, apikey]);

  return (
    <section className=" hover:scale-[1.01] transition-transform duration-300">
      <article className="flex flex-col gap-3 w-full">
        {/* Thumbnail */}
        <Link
          to={`/watch?v=${item?.id?.videoId}`}
          className="w-full aspect-video object-cover rounded-xl border border-border"
        >
          <img
            loading="lazy"
            className="w-full aspect-video object-cover rounded-xl"
            src={item?.snippet?.thumbnails?.high?.url}
            alt={item?.snippet?.title}
          />
        </Link>

        {/* Video Info */}
        <article className="flex gap-4">
          {/* Channel Avatar */}
          <Link to={`/${username}`} className="min-w-10 h-10">
            <img
              className="w-full h-full rounded-full object-cover"
              src={channelAvatar}
              alt={"Profile pic"}
            />
          </Link>

          {/* Title and Meta */}
          <div className="flex flex-col justify-start overflow-hidden">
            <Link to={`/watch?v=${item?.id?.videoId}`}>
              <h3 className="line-clamp-2 text-[0.95rem] font-medium text-text/95 leading-snug mb-0.5">
                {item?.snippet?.title}
              </h3>
            </Link>

            <Link to={`/${username}`}>
              <p className="text-[0.9rem] truncate text-subtext/90">
                {item?.snippet?.channelTitle}
              </p>
            </Link>

            {/* Meta Row */}
            <Link
              to={`/watch?v=${item?.id?.videoId}`}
              className="flex items-center gap-1 text-sm text-neutral-400 mt-1"
            >
              <span className="text-white/80 font-medium">
                {millify(viewCount)}
              </span>
              <span aria-hidden="true" className="text-neutral-500">
                •
              </span>
              <time
                className="text-neutral-400"
                dateTime={item?.snippet?.publishTime}
              >
                {time}
              </time>
            </Link>
          </div>
        </article>
      </article>
    </section>
  );
}
