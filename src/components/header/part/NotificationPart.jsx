import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";

export default function NotificationPart({ data }) {
  return (
    <Link
      to={`/${data.authUserName}`}
      className="flex items-center justify-between min-h-[80px]  max-h-[80px] gap-4 transition-all duration-300 bg-transparent hover:bg-bg-Primary border-border px-1.5 cursor-pointer border-b-[0.12rem]"
    >
      <div className="w-[20%] flex justify-center items-center">
        <img
          className="w-[45px] h-[45px] rounded-full object-cover"
          src={data.profilePic}
          alt=""
        />
      </div>
      <div className="w-[60%] flex flex-col gap-1">
        <small className="text-xs text-text mb-0.5">{data.authUserName}</small>
        <p className="truncate text-sm">{data.title}</p>
        <span className="text-xs text-subtext">
          {moment(data.date).fromNow()}
        </span>
      </div>
      <div className="w-[20%] flex justify-center items-center">
        <img
          className="h-[55px] object-cover rounded-xl"
          src={data.thumbnail}
          alt=""
        />
      </div>
    </Link>
  );
}
