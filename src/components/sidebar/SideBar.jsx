/* eslint-disable no-unused-vars */
import { ChevronRight, History, Home, ThumbsUp, Youtube } from "lucide-react";
import React, { useContext, useState } from "react";
import ShortsIcon from "../../others/ShortsIcon";
import SubscriptionsIcon from "../../others/SubscriptionsIcon";
import { Link } from "react-router-dom";
import { UiContext } from "../../contexts/Ui/UiContext";
import { AnimatePresence, motion } from "motion/react";
import MenuItem from "./part/MenuItem";
import SubscribeItem from "./part/SubscribeItem";
import { FirebaseContext } from "../../contexts/Firebase/FirebaseContext";
import googleLogo from "../../assets/google.png";
import clsx from "clsx";
import SubscribeItemLoading from "./part/SubscribeItemLoading";

// ✅ move outside → prevent re-creation on each rerender
const menuItems = [
  {
    section: null,
    items: [
      { icon: <Home />, label: "Home", to: "/" },
      { icon: <ShortsIcon />, label: "Shorts", to: "/shorts" },
      { icon: <SubscriptionsIcon />, label: "Subscriptions", to: "/channel" },
    ],
  },
  {
    section: "you",
    title: "You",
    SectionIcon: <ChevronRight size={18} />,
    sectionPath: "/liked",
    items: [
      { icon: <History size={21} />, label: "History", to: "/history" },
      { icon: <Youtube />, label: "Your videos", to: "/@atikur" },
      {
        icon: <ThumbsUp size={21} />,
        label: "Liked videos",
        to: "/liked",
      },
    ],
  },
];

// ✅ also moved outside + const not let
const subscriptionsDt = {
  section: "subscriptions",
  title: "Subscriptions",
  SectionIcon: <ChevronRight size={18} />,
  sectionPath: "/channel",
};

export default function SideBar({ type = "", Height }) {
  const { isReSideBarShow } = useContext(UiContext);

  // Firebase Context
  const { isLogged, handleGoogleSignIn, subscriptions, SubLoding } =
    useContext(FirebaseContext);

  // google Is Disable
  const [googleIsDis, setGoogleIsDis] = useState(false);

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
            className={clsx(
              menuItem.section === "you" &&
                !isLogged &&
                !isReSideBarShow &&
                "hidden",
              "w-full flex flex-col justify-center gap-0.5 items-start border-b border-border py-2"
            )}
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

            {menuItem.items.map((item, id) => {
              if (menuItem.section === "you" && !isLogged) return null;
              return (
                <MenuItem
                  key={id}
                  icon={item.icon}
                  label={item.label}
                  to={item.to}
                  isReSideBarShow={isReSideBarShow}
                  isLogged={isLogged}
                />
              );
            })}

            <AnimatePresence>
              {menuItem.section === "you" && !isLogged && (
                <motion.div
                  initial={{
                    width: 0,
                    maxHeight: 200,
                    minHeight: 200,
                    height: 200,
                  }}
                  animate={{
                    width: isReSideBarShow ? 260 : 60,
                    minWidth: isReSideBarShow ? 260 : 60,
                    maxHeight: 200,
                    minHeight: 200,
                    height: 200,
                  }}
                  exit={{
                    width: 0,
                    maxHeight: 200,
                    minHeight: 200,
                    height: 200,
                  }}
                  transition={{ duration: 0.5 }}
                  className="w-full max-h-[200px] flex justify-center items-center"
                >
                  <article
                    onClick={() =>
                      handleGoogleSignIn({
                        setGoogleIsDis: setGoogleIsDis,
                        googleIsDis: googleIsDis,
                      })
                    }
                  >
                    <button
                      disabled={googleIsDis}
                      className="bg-surface hover:bg-hover border border-border transition-all duration-300 
               px-4 py-1.5 w-full h-full rounded-full flex items-center justify-center gap-2 
               text-xs font-medium text-textColor focus:outline-none focus:ring-2 
               focus:ring-accent/40 disabled:opacity-85 disabled:pointer-events-none"
                      aria-label="Sign in"
                    >
                      <img src={googleLogo} alt="" />
                      <span>Sign in</span>
                    </button>
                  </article>
                </motion.div>
              )}
            </AnimatePresence>
          </section>
        ))}

        {isLogged && isReSideBarShow && subscriptionsDt && (
          <section className="w-full flex flex-col justify-center gap-0.5 items-start py-2">
            <Link
              to={subscriptionsDt.sectionPath}
              className="w-full bg-bg hover:bg-bg-pecondary border border-transparent hover:border-border transition-all duration-300 flex items-center justify-start gap-5 rounded-xl px-4 py-2 mb-2"
            >
              <span className="truncate text-[1.1rem] font-medium leading-none">
                {subscriptionsDt.title}
              </span>
              <div className="w-[21px] h-[21px] flex justify-end items-end">
                {subscriptionsDt.SectionIcon}
              </div>
            </Link>

            {subscriptions.map((item, id) => (
              <SubscribeItem
                key={id}
                to={`/${item?.data?.snippet?.customUrl}`}
                authName={item?.data?.snippet?.title}
                profilePic={item?.data?.snippet?.thumbnails?.high?.url}
                isReSideBarShow={isReSideBarShow}
              />
            ))}
            {SubLoding &&
              [...Array(5)].map((_, i) => <SubscribeItemLoading key={i} />)}
            {subscriptions?.length === 0 && (
              <div className="flex justify-center items-center w-full h-auto">
                <p className="text-subtext text-sm text-center py-32">
                  No subscriptions found...
                </p>
              </div>
            )}
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
