import clsx from 'clsx';
import { SearchIcon } from 'lucide-react';
import React from 'react'

export default function SearchPart({isLast,  text }) {
  return (
    <article
      className={clsx(
        "flex min-h-[40px] items-center gap-4 transition-all duration-300 bg-transparent hover:bg-bg-Primary border-border px-3 py-2.5 cursor-pointer",
        !isLast && "border-b-[0.12rem]",
        isLast && "border-b-[0rem]"
      )}
    >
      <div className="w-[5%] flex justify-center">
        <SearchIcon color="#eeeeee" size={18} />
      </div>
      <div className="w-[80%]">
        <p className="truncate text-sm">{text}</p>
      </div>
    </article>
  );
}
