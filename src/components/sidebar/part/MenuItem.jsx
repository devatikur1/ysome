import clsx from "clsx";
import React from "react";
import { NavLink } from "react-router-dom";

export default function MenuItem({ icon, label, to, isReSideBarShow, isLogged }) {
  return (
    <NavLink
      to={to === "/channel" && isLogged === false ? "/" : to}
      className={({ isActive }) =>
        clsx(
          "w-full",
          isActive && "bg-bg-pecondary border border-border",
          !isActive &&
            "bg-bg border border-transparent hover:bg-bg-pecondary hover:border-border transition-all duration-300",
          !isReSideBarShow &&
            "flex items-center justify-center gap-5 py-2.5 rounded-xl mb-2",
          isReSideBarShow &&
            "flex items-center justify-start gap-5 py-2.5 px-5 rounded-xl mb-2"
        )
      }
    >
      <div className="w-[21px] h-[21px] flex jc items-center">
        {/* <ChevronRight size={18} /> */}
        {icon}
      </div>
      {isReSideBarShow && (
        <span className="truncate text-sm font-medium  leading-none">
          {label}
        </span>
      )}
    </NavLink>
  );
}
