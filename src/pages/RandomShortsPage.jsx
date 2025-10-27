/* eslint-disable react-hooks/exhaustive-deps */
import { MoveDown, MoveUp } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UiContext } from "../contexts/Ui/UiContext";
import RandomShortsPart from "../components/RandomShortsComponent/RandomShortsPart";
import { VideoData1, VideoData2 } from "../utils/data";
import { GetChannelData } from "../utils/GetChannelData";
import { GetVideoData } from "../utils/GetVideoData";

export default function RandomShortsPage() {
  const { HomePageOutletWidth, HomePageHeight } = useContext(UiContext);

  const params = useParams();
  const navigate = useNavigate();
  const [VideoID, setVideoID] = useState(Object.values(params)[0]);
  const [items, setItems] = useState([]);

  // exitsChannel Data & IDs management
  const [exitsChannelIds, setExitsChannelIds] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("ExitsChannelIds")) || [];
    } catch {
      return [];
    }
  });
  const [exitsChannelData, setExitsChannelData] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("ExitsChannelData")) || {};
    } catch {
      return {};
    }
  });

  // Channel
  const [itemsChannelIds, setItemsChannelIds] = useState([]);
  const [channelsData, setChannelsData] = useState(
    JSON.parse(localStorage.getItem("ExitsChannelData")) || {}
  );

  // Queries
  const [queries, setQueries] = useState(localStorage.getItem("queries"));

  // currentIndex of items video
  const [currentIndex, setCurrentIndex] = useState(0);

  // ----------------------------
  // Load Data from API/LocalStorage
  // ----------------------------

  useEffect(() => {
    let id = Object.values(params)[0];
    console.log("Video ID from params:", id);

    if (!id || id === "") {
      try {
        // ✅ load data LocalStorage
        const data = JSON.parse(localStorage.getItem("data")) || [];

        // ❌ load data LocalStorage eta empty hole ja korbe
        if (data.length === 0) {
          console.warn("No data found in localStorage");
          return;
        }

        // ✅ map dat with flat
        const mainItems = data.flatMap((d) => d.items);

        if (mainItems.length > 0) {
          setItems(mainItems);
          let mountVideoId = mainItems[0]?.id?.videoId;
          setVideoID(mountVideoId);
          navigate(`/shorts/${mountVideoId}`);
          setCurrentIndex(0);
        }
      } catch (error) {
        console.error("Error", error);
      }
    } else {
      async function fetchVideoData() {
        console.log("Fetching video data for ID:", id);

        try {
          // ✅ API theke video fetch
          const videoItem = await GetVideoData(id, VideoData2);

          // ❌ API theke video fetch na aile ja hobe
          if (!videoItem) {
            console.error("Video not found");
            return;
          }

          // ✅ Video object create
          const obj = {
            kind: videoItem.kind,
            etag: videoItem.etag,
            id: {
              kind: "youtube#video",
              videoId: videoItem.id,
            },
            snippet: {
              publishedAt: videoItem.snippet.publishedAt,
              channelId: videoItem.snippet.channelId,
              title: videoItem.snippet.title,
              description: videoItem.snippet.description,
              thumbnails: videoItem.snippet.thumbnails,
              channelTitle: videoItem.snippet.channelTitle,
              liveBroadcastContent: videoItem.snippet.liveBroadcastContent,
              publishTime: videoItem.snippet.publishTime,
            },
          };

          // ✅ LocalStorage e existing data milabo temporay
          const data = JSON.parse(localStorage.getItem("data")) || [];
          const existingItems = data.flatMap((d) => d.items);

          // ✅ new ta agee first add hobe video
          const mainItems = [obj, ...existingItems];

          if (mainItems.length > 0) {
            setItems(mainItems);
            let mountVideoId = mainItems[0]?.id?.videoId;
            setVideoID(mountVideoId);
            navigate(`/shorts/${mountVideoId}`);
            setCurrentIndex(0);
          }
        } catch (err) {
          console.error("Fetch Data Error:", err);
        }
      }

      fetchVideoData();
    }
  }, []); // ✅ Empty dependency - mount

  // -----------------------------------------------------------------------
  // Extract Channel IDs 😒 alada kore ante hobe tai eke barti kore ante hoy
  // -----------------------------------------------------------------------

  useEffect(() => {
    const newChannelIds = new Set();

    // ✅ add Channel Id
    items.forEach((i) => {
      if (i?.snippet?.channelId) {
        newChannelIds.add(i.snippet.channelId);
      }
    });

    // ✅ filter by the ExitsChannel Id
    setExitsChannelIds((p) => {
      const fillterChannelID = new Set(p);
      Array.from(newChannelIds).forEach((fcid) => fillterChannelID.add(fcid));

      const arr = Array.from(fillterChannelID);
      setItemsChannelIds(arr);
      localStorage.setItem("ExitsChannelIds", JSON.stringify(arr));

      return arr;
    });
  }, [items]); // <= jokhon items change hobe tokhon ey poro kaj ta aber o korbe

  // ------------------------------------
  // Fetch Channel && video data function
  // ------------------------------------

  useEffect(() => {
    // 📺 Channel Data
    async function fetchChanaleData(ChanaleId) {
      try {
        const ChanaleItem = await GetChannelData(ChanaleId, VideoData2);
        setChannelsData((prev) => ({
          ...prev,
          [ChanaleId]: ChanaleItem,
        }));
      } catch (err) {
        console.error("Fetch Data Error:" + err);
      }
    }

    // main funtion
    async function callData() {
      if (itemsChannelIds.length === 0) return;

      // 📺 Get Channel Data
      itemsChannelIds.map(async (cid) => {
        await fetchChanaleData(cid);
      });

      setItemsChannelIds([]);
    }

    // call funtion
    callData();
    console.log(itemsChannelIds);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemsChannelIds, VideoData1]);

  // -----------------
  // set channelsData
  // -----------------

  useEffect(() => {
    if (channelsData.length === 0) return;
    setExitsChannelData(() => {
      localStorage.setItem("ExitsChannelData", JSON.stringify(channelsData));
      return channelsData;
    });
  }, [channelsData]); // <= jokhon items change hobe tokhon ey poro kaj ta aber o korbe

  // ----------------------------
  // Scroll or Button Navigation
  // ----------------------------

  function nextVid() {
    if (currentIndex < items.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      // URL update
      const nextVideoId = items[nextIndex]?.id?.videoId;
      setVideoID(nextVideoId);
      if (nextVideoId) navigate(`/shorts/${nextVideoId}`);
    }
  }

  function prevVid() {
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      setCurrentIndex(prevIndex);
      // URL update
      const prevVideoId = items[prevIndex]?.id?.videoId;
      setVideoID(prevVideoId);
      if (prevVideoId) navigate(`/shorts/${prevVideoId}`);
    }
  }

  // ----------------------------
  // Wheel Scroll Event for Shorts
  // ----------------------------

  useEffect(() => {
    // Wheel Event
    const handleWheel = (e) => {
      if (e.deltaY > 40) nextVid();
      else if (e.deltaY < -40) prevVid();
    };

    function ChangePrevVid(e) {
      console.log(e);
      if (e.key === "ArrowDown") nextVid();
      else if (e.key === "ArrowUp") prevVid();
    }

    // Add listeners
    window.addEventListener("wheel", handleWheel);
    window.addEventListener("keydown", ChangePrevVid);

    // Cleanup
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", ChangePrevVid);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, items]);

  // ------------------------------------
  // Temp Data
  // ------------------------------------

  useEffect(() => {
    console.log(channelsData);
    console.log(exitsChannelIds);
    console.log(exitsChannelData);
  }, [channelsData, exitsChannelIds, exitsChannelData]);

  // ----------------------------
  // Render
  // ----------------------------
  return (
    <main
      style={{
        // width
        width: `${HomePageOutletWidth}px`,
        maxWidth: `${HomePageOutletWidth}px`,
        minWidth: `${HomePageOutletWidth}px`,

        // height
        height: `${HomePageHeight}px`,
        maxHeight: `${HomePageHeight}px`,
        minHeight: `${HomePageHeight}px`,
      }}
      className="relative flex flex-col overflow-x-hidden overflow-y-auto snap-y snap-mandatory scroll-smooth scroll-none *:select-none"
    >
      <section
        style={{
          // width
          width: `${HomePageOutletWidth}px`,
          maxWidth: `${HomePageOutletWidth}px`,
          minWidth: `${HomePageOutletWidth}px`,

          // height
          height: `${HomePageHeight}px`,
          maxHeight: `${HomePageHeight}px`,
          minHeight: `${HomePageHeight}px`,
        }}
        className="w-[100%] h-[100%] px-5 py-5 flex justify-center items-center snap-start snap-always relative"
      >
        <RandomShortsPart
          style={{
            maxWidth: `${HomePageOutletWidth}px`,
          }}
          HomePageHeight={HomePageHeight}
          VideoID={VideoID}
          item={items[currentIndex]}
          channelData={channelsData[items[currentIndex]?.snippet?.channelId]}
          isPrevDisabled={currentIndex === 0}
          isNextDisabled={currentIndex === items?.length - 1}
          nextVid={nextVid}
          prevVid={prevVid}
        />
      </section>

      {/* Navigation Buttons */}
      <section
        style={{
          maxHeight: `${HomePageHeight}px`,
          Height: `${HomePageHeight}px`,
          minHeight: `${HomePageHeight}px`,
        }}
        className="hidden md:flex w-auto fixed bottom-0 right-2 h-full gap-3 flex-col items-center justify-center rounded-xl pointer-events-none"
      >
        <button
          onClick={prevVid}
          disabled={currentIndex === 0}
          className="pointer-events-auto w-[60px] h-[60px] bg-black/50 hover:bg-black/70 hover:scale-[0.95] transition-all duration-300 rounded-full flex justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm"
        >
          <MoveUp size={25} strokeWidth={2} className="text-white" />
        </button>

        <button
          onClick={nextVid}
          disabled={currentIndex === items?.length - 1}
          className="pointer-events-auto w-[60px] h-[60px] bg-black/50 hover:bg-black/70 hover:scale-[0.95] transition-all duration-300 rounded-full flex justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm"
        >
          <MoveDown size={25} strokeWidth={2} className="text-white" />
        </button>
      </section>
    </main>
  );
}
