import clsx from "clsx";
import { ChevronLeft } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import React, { useEffect, useState } from "react";
import NotificationPart from "./NotificationPart";

export default function Notification({
  NotificationFeedRef,
  setNotificationShow,
}) {
  const [Height, setHeight] = useState("500px");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerHeight < 500) {
        setHeight(`${window.innerHeight - 70}px`);
      } else {
        setHeight("500px");
      }
    };

    // initial call
    handleResize();

    // add listener
    window.addEventListener("resize", handleResize);

    // cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let notification = [
    {
      title: "শিক্ষার্থীদের সাফল্য আমাদের প্রধান উদ্দেশ্য!",
      thumbnail:
        "https://i.ytimg.com/vi/7lCCMYOEyng/hqdefault.jpg?sqp=-oaymwEmCOADEOgC8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGBcgUCh_MA8=&rs=AOn4CLD06qTw_fAImmIkMNCyfVD-TlA5Ag",
      date: "Sat Oct 18 2025 22:02:30 GMT+0600 (Bangladesh Standard Time)",
      authUserName: "@TEE_TTH",
      profilePic:
        "https://yt3.googleusercontent.com/q3anTfz3tvsBdY3Cr0m3S0dy0-tEu2E8QdHIxn0x0XUC9R2LvgFiIMIL8n_3h45Wq2B8MpBH=s72-c-k-c0x00ffffff-no-rj",
      authName: "Technique Easy Education",
    },
    {
      title: "শিক্ষার মাধ্যমে ভবিষ্যৎ গড়ি!",
      thumbnail:
        "https://i.ytimg.com/vi/7lCCMYOEyng/hqdefault.jpg?sqp=-oaymwEmCOADEOgC8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGBcgUCh_MA8=&rs=AOn4CLD06qTw_fAImmIkMNCyfVD-TlA5Ag",
      date: "Sat Oct 18 2025 22:02:30 GMT+0600 (Bangladesh Standard Time)",
      authUserName: "@TEE_TTH",
      profilePic:
        "https://yt3.googleusercontent.com/q3anTfz3tvsBdY3Cr0m3S0dy0-tEu2E8QdHIxn0x0XUC9R2LvgFiIMIL8n_3h45Wq2B8MpBH=s72-c-k-c0x00ffffff-no-rj",
      authName: "Technique Easy Education",
    },
    {
      title: "শিক্ষা হোক সবার জন্য সহজ!",
      thumbnail:
        "https://i.ytimg.com/vi/7lCCMYOEyng/hqdefault.jpg?sqp=-oaymwEmCOADEOgC8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGBcgUCh_MA8=&rs=AOn4CLD06qTw_fAImmIkMNCyfVD-TlA5Ag",
      date: "Sat Oct 18 2025 22:02:30 GMT+0600 (Bangladesh Standard Time)",
      authUserName: "@TEE_TTH",
      profilePic:
        "https://yt3.googleusercontent.com/q3anTfz3tvsBdY3Cr0m3S0dy0-tEu2E8QdHIxn0x0XUC9R2LvgFiIMIL8n_3h45Wq2B8MpBH=s72-c-k-c0x00ffffff-no-rj",
      authName: "Technique Easy Education",
    },
    {
      title: "জ্ঞানের আলো ছড়িয়ে দিই!",
      thumbnail:
        "https://i.ytimg.com/vi/7lCCMYOEyng/hqdefault.jpg?sqp=-oaymwEmCOADEOgC8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGBcgUCh_MA8=&rs=AOn4CLD06qTw_fAImmIkMNCyfVD-TlA5Ag",
      date: "Sat Oct 18 2025 22:02:30 GMT+0600 (Bangladesh Standard Time)",
      authUserName: "@TEE_TTH",
      profilePic:
        "https://yt3.googleusercontent.com/q3anTfz3tvsBdY3Cr0m3S0dy0-tEu2E8QdHIxn0x0XUC9R2LvgFiIMIL8n_3h45Wq2B8MpBH=s72-c-k-c0x00ffffff-no-rj",
      authName: "Technique Easy Education",
    },
    {
      title: "শিক্ষার মাধ্যমে স্বপ্ন পূরণ!",
      thumbnail:
        "https://i.ytimg.com/vi/7lCCMYOEyng/hqdefault.jpg?sqp=-oaymwEmCOADEOgC8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGBcgUCh_MA8=&rs=AOn4CLD06qTw_fAImmIkMNCyfVD-TlA5Ag",
      date: "Sat Oct 18 2025 22:02:30 GMT+0600 (Bangladesh Standard Time)",
      authUserName: "@TEE_TTH",
      profilePic:
        "https://yt3.googleusercontent.com/q3anTfz3tvsBdY3Cr0m3S0dy0-tEu2E8QdHIxn0x0XUC9R2LvgFiIMIL8n_3h45Wq2B8MpBH=s72-c-k-c0x00ffffff-no-rj",
      authName: "Technique Easy Education",
    },
    {
      title: "শিক্ষা হোক সবার জন্য সহজ!",
      thumbnail:
        "https://i.ytimg.com/vi/7lCCMYOEyng/hqdefault.jpg?sqp=-oaymwEmCOADEOgC8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGBcgUCh_MA8=&rs=AOn4CLD06qTw_fAImmIkMNCyfVD-TlA5Ag",
      date: "Sat Oct 18 2025 22:02:30 GMT+0600 (Bangladesh Standard Time)",
      authUserName: "@TEE_TTH",
      profilePic:
        "https://yt3.googleusercontent.com/q3anTfz3tvsBdY3Cr0m3S0dy0-tEu2E8QdHIxn0x0XUC9R2LvgFiIMIL8n_3h45Wq2B8MpBH=s72-c-k-c0x00ffffff-no-rj",
      authName: "Technique Easy Education",
    },
    {
      title: "জ্ঞানের আলো ছড়িয়ে দিই!",
      thumbnail:
        "https://i.ytimg.com/vi/7lCCMYOEyng/hqdefault.jpg?sqp=-oaymwEmCOADEOgC8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGBcgUCh_MA8=&rs=AOn4CLD06qTw_fAImmIkMNCyfVD-TlA5Ag",
      date: "Sat Oct 18 2025 22:02:30 GMT+0600 (Bangladesh Standard Time)",
      authUserName: "@TEE_TTH",
      profilePic:
        "https://yt3.googleusercontent.com/q3anTfz3tvsBdY3Cr0m3S0dy0-tEu2E8QdHIxn0x0XUC9R2LvgFiIMIL8n_3h45Wq2B8MpBH=s72-c-k-c0x00ffffff-no-rj",
      authName: "Technique Easy Education",
    },
    {
      title: "শিক্ষার মাধ্যমে স্বপ্ন পূরণ!",
      thumbnail:
        "https://i.ytimg.com/vi/7lCCMYOEyng/hqdefault.jpg?sqp=-oaymwEmCOADEOgC8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGBcgUCh_MA8=&rs=AOn4CLD06qTw_fAImmIkMNCyfVD-TlA5Ag",
      date: "Sat Oct 18 2025 22:02:30 GMT+0600 (Bangladesh Standard Time)",
      authUserName: "@TEE_TTH",
      profilePic:
        "https://yt3.googleusercontent.com/q3anTfz3tvsBdY3Cr0m3S0dy0-tEu2E8QdHIxn0x0XUC9R2LvgFiIMIL8n_3h45Wq2B8MpBH=s72-c-k-c0x00ffffff-no-rj",
      authName: "Technique Easy Education",
    },
    {
      title: "শিক্ষার মাধ্যমে স্বপ্ন পূরণ!",
      thumbnail:
        "https://i.ytimg.com/vi/7lCCMYOEyng/hqdefault.jpg?sqp=-oaymwEmCOADEOgC8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGBcgUCh_MA8=&rs=AOn4CLD06qTw_fAImmIkMNCyfVD-TlA5Ag",
      date: "Sat Oct 18 2025 22:02:30 GMT+0600 (Bangladesh Standard Time)",
      authUserName: "@TEE_TTH",
      profilePic:
        "https://yt3.googleusercontent.com/q3anTfz3tvsBdY3Cr0m3S0dy0-tEu2E8QdHIxn0x0XUC9R2LvgFiIMIL8n_3h45Wq2B8MpBH=s72-c-k-c0x00ffffff-no-rj",
      authName: "Technique Easy Education",
    },
    {
      title: "শিক্ষা হোক সবার জন্য সহজ!",
      thumbnail:
        "https://i.ytimg.com/vi/7lCCMYOEyng/hqdefault.jpg?sqp=-oaymwEmCOADEOgC8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGBcgUCh_MA8=&rs=AOn4CLD06qTw_fAImmIkMNCyfVD-TlA5Ag",
      date: "Sat Oct 18 2025 22:02:30 GMT+0600 (Bangladesh Standard Time)",
      authUserName: "@TEE_TTH",
      profilePic:
        "https://yt3.googleusercontent.com/q3anTfz3tvsBdY3Cr0m3S0dy0-tEu2E8QdHIxn0x0XUC9R2LvgFiIMIL8n_3h45Wq2B8MpBH=s72-c-k-c0x00ffffff-no-rj",
      authName: "Technique Easy Education",
    },
    {
      title: "জ্ঞানের আলো ছড়িয়ে দিই!",
      thumbnail:
        "https://i.ytimg.com/vi/7lCCMYOEyng/hqdefault.jpg?sqp=-oaymwEmCOADEOgC8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGBcgUCh_MA8=&rs=AOn4CLD06qTw_fAImmIkMNCyfVD-TlA5Ag",
      date: "Sat Oct 18 2025 22:02:30 GMT+0600 (Bangladesh Standard Time)",
      authUserName: "@TEE_TTH",
      profilePic:
        "https://yt3.googleusercontent.com/q3anTfz3tvsBdY3Cr0m3S0dy0-tEu2E8QdHIxn0x0XUC9R2LvgFiIMIL8n_3h45Wq2B8MpBH=s72-c-k-c0x00ffffff-no-rj",
      authName: "Technique Easy Education",
    },
    {
      title: "শিক্ষার মাধ্যমে স্বপ্ন পূরণ!",
      thumbnail:
        "https://i.ytimg.com/vi/7lCCMYOEyng/hqdefault.jpg?sqp=-oaymwEmCOADEOgC8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGBcgUCh_MA8=&rs=AOn4CLD06qTw_fAImmIkMNCyfVD-TlA5Ag",
      date: "Sat Oct 18 2025 22:02:30 GMT+0600 (Bangladesh Standard Time)",
      authUserName: "@TEE_TTH",
      profilePic:
        "https://yt3.googleusercontent.com/q3anTfz3tvsBdY3Cr0m3S0dy0-tEu2E8QdHIxn0x0XUC9R2LvgFiIMIL8n_3h45Wq2B8MpBH=s72-c-k-c0x00ffffff-no-rj",
      authName: "Technique Easy Education",
    },
  ];

  return (
    <aside className="fixed top-0 md:top-[62px] w-full flex justify-end items-center z-50 md:-translate-x-[50px]">
      <motion.section
        ref={NotificationFeedRef}
        initial={{ opacity: 0, scale: 0.95, height: 0 }}
        animate={{
          opacity: 1,
          scale: 1,
          height: Height,
        }}
        exit={{ opacity: 0, scale: 0.95, height: 0 }}
        transition={{
          duration: 0.4,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className={`flex flex-col gap-5 max-h-[100vh] min-h-[100vh] md:max-h-[${Height}] md:min-h-[0px] w-screen md:w-[400px] bg-bg-pecondary p-5 border border-border md:rounded-2xl shadow-lg overflow-hidden`}
      >
        <section className="sticky top-0 flex justify-start items-center w-full gap-2 border-b border-border py-2 ">
          <article
            onClick={() => setNotificationShow(false)}
            className="flex md:hidden"
          >
            <div className="hover:bg-hover transition-all duration-300 p-2 w-full h-full rounded-full flex justify-center items-center">
              <ChevronLeft size={20} color={"#eeeeee"} />
            </div>
          </article>
          <div className="font-semibold">Notifications</div>
        </section>

        <section className="flex flex-col h-full border border-border rounded-xl overflow-x-hidden overflow-y-auto custom-scroll">
          {notification.map((s, i) => (
            <NotificationPart key={i} data={s} />
          ))}

          {notification.length === 0 && (
            <article
              className={clsx(
                "w-full h-full flex justify-center items-center",
                "flex md:hidden"
              )}
            >
              <div className="text-subtext">Empty notification</div>
            </article>
          )}
        </section>
      </motion.section>
    </aside>
  );
}
