import clsx from "clsx";
import React from "react";
import { Link } from "react-router-dom";

export default function SubscribeItem({
  to,
  authName,
  profilePic,
}) {
  return (
    <Link
      to={to}
      className={clsx(
        "w-full bg-transparent border border-transparent hover:bg-bg-pecondary hover:border-border transition-all duration-300 flex items-center justify-start gap-3 px-3 py-2 mb-1 rounded-xl"
      )}
    >
      <div className="flex justify-center items-center">
        <img
          className="w-[28px] h-[28px] rounded-full object-cover"
          src={profilePic}
          alt=""
        />
      </div>

      <div className="flex flex-col gap-1">
        <span className="text-[0.85rem] truncate text-text mb-0.5">
          {authName}
        </span>
      </div>
    </Link>
  );
}
