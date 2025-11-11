import React, { useContext, useState } from "react";
import Logo from "../../others/Logo";
import googleLogo from "../../assets/google.png";
import { Bell, Menu, Plus, Search } from "lucide-react";
import { UiContext } from "../../contexts/Ui/UiContext";
import clsx from "clsx";
import { FirebaseContext } from "../../contexts/Firebase/FirebaseContext";
import emptyProfilePic from "../../assets/emptyProfilePic.jpg";

export default function Header() {
  // Ui Context
  const {
    // Search
    isSearchShow,
    setIsSearchShow,
    searchBtnRef,

    // Notifications
    setNotificationShow,
    notificationBtnRef,

    // relative sidebar
    setIsReSideBarShow,
  } = useContext(UiContext);

  // Firebase Context
  const { auth } = useContext(FirebaseContext);

  const { isLogged, userData, handleGoogleSignIn } = auth;

  // google Is Disable
  const [googleIsDis, setGoogleIsDis] = useState(false);

  return (
    <header className="w-full h-full max-h-[60px] flex justify-between items-center px-5 py-2 border-border border-b *:select-none">
      <section className="flex">
        {" "}
        <article
          onClick={() => {
            setIsReSideBarShow((p) => !p);
          }}
          className="hidden md:flex items-center justify-center"
        >
          <div className="bg-bg-Primary border border-border hover:bg-hover transition-all duration-300 p-2 rounded-full flex items-center gap-2 mr-6">
            <Menu size={20} strokeWidth={2} absoluteStrokeWidth />
          </div>
        </article>
        <article className="w-[150px] lg:w-[170px] mt-[10px]">
          <Logo
            width={140}
            height={30}
            accent="#00adb5"
            bg="#0f0f0f"
            textColor="#eeeeee"
          />
        </article>
      </section>
      <section className="hidden md:flex items-center gap-4 *:cursor-pointer *:select-none">
        <article
          ref={searchBtnRef}
          onClick={() => setIsSearchShow(true)}
          className="mr-5"
        >
          <div
            className={clsx(
              "bg-surface hover:bg-hover border transition-all duration-300 px-2 py-1.5 md:px-3 md:py-1 w-full h-full rounded-full flex items-center gap-2",
              !isSearchShow && "border-border",
              isSearchShow && "border-accent"
            )}
          >
            <Search size={18} color={"#eeeeee"} />
            <span className="hidden md:flex text-xs">Search</span>
          </div>
        </article>

        {isLogged ? (
          <>
            <article>
              <button
                className="bg-surface hover:bg-hover border border-border transition-all duration-300 
               px-3 py-1 w-full h-full rounded-full flex items-center justify-center gap-2 
               text-xs font-medium focus:outline-none focus:ring-2 
               focus:ring-accent"
                aria-label="upload video"
              >
                <Plus size={19} />
                <span className="text-xs">Create</span>
              </button>
            </article>

            <article
              ref={notificationBtnRef}
              onClick={() => setNotificationShow(true)}
            >
              <div className="hover:bg-hover transition-all duration-300 p-2 w-full h-full rounded-full">
                <Bell size={20} color={"#eeeeee"} />
                {/* <BellDot color={"#eeeeee"} /> */}
              </div>
            </article>

            <article>
              <img
                className="w-[35px] h-[35px] rounded-full"
                src={userData?.photo || emptyProfilePic}
                alt=""
              />
            </article>
          </>
        ) : (
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
        )}
      </section>

      <section className="flex md:hidden items-center gap-6 *:cursor-pointer *:select-none">
        <article
          ref={searchBtnRef}
          onClick={() => setIsSearchShow((prev) => !prev)}
        >
          <div className="hover:bg-hover hover border-hover hover:border-border transition-all duration-300 px-2 py-1.5 md:px-3 md:py-1 w-full h-full rounded-full flex items-center gap-2">
            <Search size={18} color={"#eeeeee"} />
            <span className="hidden md:flex text-xs">Search</span>
          </div>
        </article>

        {isLogged && (
          <article
            ref={notificationBtnRef}
            onClick={() => setNotificationShow(true)}
          >
            <div className="hover:bg-hover transition-all duration-300 px-2 py-1.5 md:p-2 w-full h-full rounded-full">
              <Bell size={19} color={"#eeeeee"} />
              {/* <BellDot color={"#eeeeee"} /> */}
            </div>
          </article>
        )}
      </section>
    </header>
  );
}
