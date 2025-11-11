import React from "react";
import NoInternetIcon from "../../others/NoInternetIcon";

export default function ErrorPage({ style, fetchData }) {
  return (
    <main
      style={style}
      className="w-full h-full flex justify-center items-center"
    >
      <div className="mb-14 flex flex-col justify-center items-center gap-1.5">
        <div className="w-[100px] md:w-[180px] flex flex-col justify-center items-center">
          <NoInternetIcon />
        </div>
        <p className="font-medium text-sm md:text-xl text-text mb-1">
          Something went wrong
        </p>
        <span className="text-xs md:text-sm text-subtext">
          We couldn't load videos. Try again
        </span>
        <div className="mt-2">
          <button
            onClick={fetchData}
            className="bg-surface hover:bg-hover border transition-all duration-300 px-3 py-0.5 md:px-3 md:py-1 w-full h-full rounded-full flex items-center gap-2 border-border text-accent font-semibold"
          >
            Retry
          </button>
        </div>
      </div>
    </main>
  );
}
