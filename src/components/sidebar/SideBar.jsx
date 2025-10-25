/* eslint-disable no-unused-vars */
import { ChevronRight, History, Home, ThumbsUp, Youtube } from "lucide-react";
import React, { useContext } from "react";
import ShortsIcon from "../../others/ShortsIcon";
import SubscriptionsIcon from "../../others/SubscriptionsIcon";
import { Link } from "react-router-dom";
import { UiContext } from "../../contexts/Ui/UiContext";
import { motion } from "motion/react";
import MenuItem from "./part/MenuItem";
import SubscribeItem from "./part/SubscribeItem";

// ✅ move outside → prevent re-creation on each rerender
const menuItems = [
  {
    section: null,
    items: [
      { icon: <Home />, label: "Home", to: "/" },
      { icon: <ShortsIcon />, label: "Shorts", to: "/shorts/id" },
      { icon: <SubscriptionsIcon />, label: "Subscriptions", to: "/channels" },
    ],
  },
  {
    section: "you",
    title: "You",
    SectionIcon: <ChevronRight size={18} />,
    sectionPath: "/feed",
    items: [
      { icon: <History size={21} />, label: "History", to: "/feed/history" },
      { icon: <Youtube />, label: "Your videos", to: "/feed/@atikur" },
      {
        icon: <ThumbsUp size={21} />,
        label: "Liked videos",
        to: "/feed/liked",
      },
    ],
  },
];

// ✅ also moved outside + const not let
const subscriptions = {
  section: "subscriptions",
  title: "Subscriptions",
  SectionIcon: <ChevronRight size={18} />,
  sectionPath: "/feed/channels",
  items: Array(8).fill({
    date: "Sat Oct 18 2025 22:02:30 GMT+0600 (Bangladesh Standard Time)",
    authUserName: "@TEE_TTH",
    profilePic:
      "https://yt3.googleusercontent.com/q3anTfz3tvsBdY3Cr0m3S0dy0-tEu2E8QdHIxn0x0XUC9R2LvgFiIMIL8n_3h45Wq2B8MpBH=s72-c-k-c0x00ffffff-no-rj",
    authName: "Technique Easy Education",
  }),
};

export default function SideBar({ type = "", Height }) {
  const { isReSideBarShow } = useContext(UiContext);

  return (
    <motion.aside
      initial={{ width: 0, opacity: 0, minHeight: Height }}
      animate={{
        width: isReSideBarShow ? 260 : 60,
        minWidth: isReSideBarShow ? 260 : 60,
        opacity: 1,
        height: Height, 
        minHeight: Height,
      }}
      exit={{ width: 0, opacity: 0, minHeight: Height }}
      transition={{ duration: 0.3 }}
      className={`flex ${
        type === "relative" ? "relative" : "fixed"
      } flex-col justify-between gap-2 py-2 ${
        isReSideBarShow ? "px-2" : "px-1"
      } h-full border-r border-border`}
    >
      <main className="overflow-y-auto overflow-x-hidden custom-scroll scroll-none">
        {menuItems.map((menuItem, mid) => (
          <section
            key={mid}
            className="w-full flex flex-col justify-center gap-0.5 items-start border-b border-border py-2"
          >
            {menuItem.section !== null && isReSideBarShow && (
              <Link
                to={menuItem.sectionPath}
                className="w-full bg-bg hover:bg-bg-pecondary border border-transparent hover:border-border transition-all duration-300 flex items-center justify-start gap-5 rounded-xl px-4 py-2 mb-2"
              >
                <span className="truncate text-xl font-medium leading-none">
                  {menuItem.title}
                </span>
                <div className="w-[21px] h-[21px] flex justify-end items-end">
                  {menuItem.SectionIcon}
                </div>
              </Link>
            )}

            {menuItem.items.map((item, id) => (
              <MenuItem
                key={id}
                icon={item.icon}
                label={item.label}
                to={item.to}
                isReSideBarShow={isReSideBarShow}
              />
            ))}
          </section>
        ))}

        {isReSideBarShow && subscriptions && (
          <section className="w-full flex flex-col justify-center gap-0.5 items-start py-2">
            <Link
              to={subscriptions.sectionPath}
              className="w-full bg-bg hover:bg-bg-pecondary border border-transparent hover:border-border transition-all duration-300 flex items-center justify-start gap-5 rounded-xl px-4 py-2 mb-2"
            >
              <span className="truncate text-[1.1rem] font-medium leading-none">
                {subscriptions.title}
              </span>
              <div className="w-[21px] h-[21px] flex justify-end items-end">
                {subscriptions.SectionIcon}
              </div>
            </Link>

            {subscriptions.items.map((item, id) => (
              <SubscribeItem
                key={id}
                to={`/${item.authUserName}`}
                authName={item.authName}
                profilePic={item.profilePic}
                isReSideBarShow={isReSideBarShow}
              />
            ))}
          </section>
        )}
      </main>

      {isReSideBarShow && (
        <footer className="flex justify-center items-center py-1.5">
          <p className="text-subtext text-xs">© 2025 devatikur1</p>
        </footer>
      )}
    </motion.aside>
  );
}
