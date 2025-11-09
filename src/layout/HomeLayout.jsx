/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import SideBar from "../components/sidebar/SideBar";
import { NavLink, Outlet } from "react-router-dom";
import { UiContext } from "../contexts/Ui/UiContext";
import { AnimatePresence, motion } from "motion/react";
import { Home, ThumbsUp } from "lucide-react";
import ShortsIcon from "../others/ShortsIcon";
import SubscriptionsIcon from "../others/SubscriptionsIcon";
import clsx from "clsx";
import { FirebaseContext } from "../contexts/Firebase/FirebaseContext";
import googleLogo from "../assets/google.png";
import emptyProfilePic from "../assets/emptyProfilePic.jpg";

export default function HomeLayout() {
  // UiContext
  const { HomePageWidth, HomePageHeight, HomePageOutletWidth } =
    useContext(UiContext);
  const { auth } = useContext(FirebaseContext);
  let { isLogged, userData, handleGoogleSignIn } = auth;

  const [Height, setHeight] = useState(window.innerWidth);
  const [googleIsDis, setGoogleIsDis] = useState(false);

  useEffect(() => {
    setHeight(window.innerWidth);
  }, [HomePageWidth]);

  const menuItems = [
    { icon: <Home />, label: "Home", to: "/" },
    { icon: <ShortsIcon />, label: "Shorts", to: "/shorts" },
    {
      icon: <SubscriptionsIcon />,
      label: "Subscriptions",
      to: "/channel",
    },
  ];
  console.log(userData);

  return (
    <section
      className="w-full flex md:items-start md:justify-start items-center justify-center overflow-hidden"
      style={{
        maxHeight: `${HomePageHeight}px`,
        maxWidth: `${HomePageWidth}px`,
        minHeight: `${HomePageHeight}px`,
        minWidth: `${HomePageWidth}px`,
      }}
    >
      <AnimatePresence>
        {Height > 768 && <SideBar Height={HomePageHeight} type="relative" />}
      </AnimatePresence>
      <div
        style={{
          maxWidth: `${HomePageOutletWidth}px`,
          maxHeight: `${HomePageHeight}px`,
          minWidth: `${HomePageOutletWidth}px`,
          minHeight: `${HomePageHeight}px`,
        }}
        className="relative flex flex-col overflow-hidden transition-all duration-30"
      >
        <Outlet />
        <section className="z-50 flex md:hidden fixed bottom-0 w-full bg-bg border-t border-border py-2 px-5 h-[50px] *:select-none">
          <div className="w-full h-full flex justify-between items-center">
            {menuItems.map((mt) => (
              <NavLink
                to={mt.to === "/channel" && isLogged === false ? "/" : mt.to}
                className={({ isActive }) =>
                  clsx(
                    "w-[45px] h-full",
                    isActive && "bg-bg-pecondary border border-border",
                    !isActive &&
                      "bg-bg border border-transparent hover:bg-bg-pecondary hover:border-border transition-all duration-300",

                    "flex items-center justify-center gap-5 py-2.5 rounded-xl"
                  )
                }
              >
                <div className="w-[21px] h-[21px] flex jc items-center">
                  {/* <ChevronRight size={18} /> */}
                  {mt.icon}
                </div>
              </NavLink>
            ))}
            {isLogged ? (
              <NavLink
                to={"/@atikur"}
                className={({ isActive }) =>
                  clsx(
                    "w-[45px] h-full py-2 flex items-center justify-center gap-5 rounded-xl",
                    isActive && "bg-bg-pecondary border border-border "
                  )
                }
              >
                <article>
                  <img
                    className="w-[25px] h-[25px] rounded-full p-[2px]"
                    src={userData?.photo || emptyProfilePic}
                    alt=""
                  />
                </article>
              </NavLink>
            ) : (
              <article
                onClick={() =>
                  handleGoogleSignIn({
                    setGoogleIsDis: setGoogleIsDis,
                    googleIsDis: googleIsDis,
                  })
                }
                className="bg-bg-pecondary border border-border h-full w-[45px] flex justify-center items-center rounded-xl"
              >
                <button
                  disabled={googleIsDis}
                  className="disabled:opacity-85 disabled:pointer-events-none"
                  aria-label="Sign in"
                >
                  <img src={googleLogo} alt="" />
                </button>
              </article>
            )}
          </div>
        </section>
      </div>
    </section>
  );
}
