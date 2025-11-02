import React from "react";
import PlayVideoPart from "./part/PlayVideoPart";
import { Link } from "react-router-dom";
import { ThumbsDown, ThumbsUp } from "lucide-react";
import CommoentInterFace from "./part/CommoentInterFace";

export default function FirstPartAndVideoPart({
  VideoID,
  title = "POKÉMON-All Theme Songs In Hindi With Lyrics I Creatorz 007",
}) {
  return (
    <section className="relative w-[100%] md:w-[69%] h-full flex flex-col gap-6">
      {/* Top: Video Part */}
      <article className="min-h-[375px] lg:min-h-[700px]">
        <PlayVideoPart VideoID={VideoID || "j7YVj5z5vzk"} title={title} />
      </article>
      {/* Middele : title and  Channel data && Like comment data */}
      <article className="flex flex-col gap-3 *:select-none">
        {/* title */}
        <h1 className="text-[1.2rem] lg:text-[1.25rem] font-semibold text-text/80 text-center md:text-start line-clamp-1">
          {title}
        </h1>

        {/* Channel data && Like comment data */}
        <section className="flex justify-between">
          {/* Channel Data */}
          <article className="flex items-end gap-5">
            <Link to="/@SureTadpoleYT">
              <article className="flex items-center gap-2">
                {/* Channel Avatar */}
                <div className="min-w-10 max-w-10 h-10 max-h-10">
                  <img
                    className="w-full h-full rounded-full object-cover border border-border"
                    src="https://yt3.ggpht.com/ytc/AIdro_llKJupBsj8xk_1jx6AYP4GIHyti3VLBmWt26SfS_BxFg=s48-c-k-c0x00ffffff-no-rj"
                    alt="Profile"
                    loading="lazy"
                  />
                </div>

                {/* Title and Meta */}
                <div className="flex flex-col justify-start overflow-hidden">
                  <p className="text-[1.03rem] truncate text-text/90 font-semibold">
                    SureTadpole
                  </p>
                  <span className="text-xs text-subtext font-medium">
                    6.77K subscribers
                  </span>
                </div>
              </article>
            </Link>
            <article className="flex justify-center items-center">
              <button className="bg-surface text-text/80 px-3 py-1 rounded-full text-[0.85rem] font-medium border border-border transition">
                Subscribed
              </button>
            </article>
          </article>

          {/* Like data */}
          <article className="flex items-end gap-5 mt-4">
            <article className="flex justify-center items-center bg-surface text-text/80 rounded-full text-[0.85rem] font-medium border border-border transition">
              {/* Like */}
              <button className="flex items-center gap-1.5 px-3 py-1 border-r-2 border-border hover:bg-bg rounded-s-full">
                <span>
                  <ThumbsUp size={19} />
                </span>
                <span>Like</span>
              </button>

              {/* DisLike */}
              <button className="px-3 py-1 hover:bg-bg rounded-e-full flex justify-center items-center">
                <ThumbsDown size={18} />
              </button>
            </article>
          </article>
        </section>
      </article>

      {/* End : Description and Commoent */}
      <article className="w-full">
        <CommoentInterFace VideoID={VideoID} />
      </article>
    </section>
  );
}
