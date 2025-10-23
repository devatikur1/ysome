import React, { useContext, useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Search from "../components/header/part/Search";
import { UiContext } from "../contexts/Ui/UiContext";
import { AnimatePresence } from "motion/react";
import Notification from "../components/header/part/Notification";

export default function AppLayout() {
  const {
    // Search
    isSearchShow,
    setIsSearchShow,
    searchBtnRef,

    // Notifications
    isNotificationShow,
    setNotificationShow,
    notificationBtnRef,
  } = useContext(UiContext);
  const SearchFeedRef = useRef(null);
  const NotificationFeedRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      // Search Close
      if (
        SearchFeedRef.current &&
        searchBtnRef.current &&
        !SearchFeedRef.current.contains(e.target) &&
        !searchBtnRef.current.contains(e.target)
      ) {
        setIsSearchShow(false);
      }

      // Create/Notification Close
      if (
        NotificationFeedRef.current &&
        notificationBtnRef.current &&
        !NotificationFeedRef.current.contains(e.target) &&
        !notificationBtnRef.current.contains(e.target)
      ) {
        setNotificationShow(false);
      }
    };
    

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchBtnRef, notificationBtnRef]);

  return (
    <>
      <aside className="w-full h-full flex flex-col">
        <Header />
        <Outlet />
      </aside>
      <AnimatePresence>
        {isSearchShow === true && (
          <Search
            SearchFeedRef={SearchFeedRef}
            setIsSearchShow={setIsSearchShow}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isNotificationShow === true && (
          <Notification
            NotificationFeedRef={NotificationFeedRef}
            setNotificationShow={setNotificationShow}
          />
        )}
      </AnimatePresence>
    </>
  );
}
