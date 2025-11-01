import React from "react";

export default function NoInterNetComponent({ icon, title, para, style }) {
  return (
    <main
      style={style}
      className="w-full h-full flex justify-center items-center"
    >
      <div className="mb-14 flex flex-col justify-center items-center gap-1.5">
        <div className="w-[180px] flex flex-col justify-center items-center">
          {icon}
        </div>
        <p className="font-medium text-xl text-text mb-1">{title}</p>
        <span className="text-sm text-subtext">{para}</span>
        <div className="mt-1">
          <button className="pointer-events-none bg-surface hover:bg-hover border transition-all duration-300 px-4 py-1.5 md:px-3 md:py-1 w-full h-full rounded-full flex items-center gap-2 border-border text-accent font-semibold">
            Retry
          </button>
        </div>
      </div>
    </main>
  );
}
