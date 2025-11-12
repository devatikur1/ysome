import React, { useContext } from "react";
import { FirebaseContext } from "../../../contexts/Firebase/FirebaseContext";
import VdPart from "./part/VdPart";
import { Link } from "react-router-dom";

export default function HistoryComponent({ gridCols, countData }) {
  const { his } = useContext(FirebaseContext);
  let { historys } = his;

  return (
    <article
      className={`flex flex-col ${
        historys.length === 0 ? "gap-0" : " gap-8"
      } border-t border-border`}
    >
      <div className="flex justify-between items-center py-3 px-3 rounded-3xl">
        <aside>
          <h1 className="text-[1rem] md:text-xl font-semibold">History</h1>
          <span className="text-[0.7rem] md:text-xs text-subtext">
            {countData?.history} videos
          </span>
        </aside>
        <aside>
          <Link
            to={"/history"}
            className="bg-bg-Primary hover:bg-surface transition-all duration-300 px-4 md:px-5 py-2 rounded-full text-[0.7rem] md:text-[0.8rem] text-accent font-semibold border border-border"
          >
            Veiw All
          </Link>
        </aside>
      </div>
      {historys.length > 0 && (
        <div
          className={`grid grid-rows-1 gap-2 ${gridCols}`}
        >
          {historys.slice(0, 4).map((ul, idx) => (
            <VdPart
              key={idx}
              id={ul?.id}
              thumbnail={
                ul?.data?.snippet?.thumbnails[4].url ||
                ul?.data?.snippet?.thumbnails[0].url
              }
              title={ul?.data?.snippet?.title}
              channelUserName={ul?.data?.channel?.snippet?.customUrl}
              channelName={ul?.data?.channel?.snippet?.title}
              viewCount={ul?.data?.statistics?.viewCount}
              publishedTime={ul?.data?.snippet?.publishedAt}
            />
          ))}
        </div>
      )}
      {historys.length === 0 && (
        <div className="w-full flex items-center justify-center">
          <p className="text-xs md:text-sm text-subtext/80 text-center py-32">
            No History found...
          </p>
        </div>
      )}
    </article>
  );
}
