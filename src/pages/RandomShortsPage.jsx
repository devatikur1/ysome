import { MoveDown, MoveUp } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UiContext } from "../contexts/Ui/UiContext";
import RandomShortsPart from "../components/RandomShortsComponent/RandomShortsPart";
import { VideoData1, VideoData2 } from "../utils/data";
import { GetChannelData } from "../utils/GetChannelData";
import { GetVideoData } from "../utils/GetVideoData";

export default function RandomShortsPage() {
  const { isReSideBarShow, HomePageOutletWidth, HomePageHeight } =
    useContext(UiContext);

  const params = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [items, setItems] = useState([]);
  const [itemsChannelIds, setItemsChannelIds] = useState([]);
  const [itemsVideoIds, setItemsVideoIds] = useState([]);
  const [videosData, setVideosData] = useState({});
  const [channelsData, setChannelsData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  // ----------------------------
  // Load Data from LocalStorage
  // ----------------------------

  useEffect(() => {
    let id = Object.values(params)[0];
    console.log(id);

    if (id === "") {
      // data
      let data = JSON.parse(localStorage.getItem("data"));
      setData(data);
      const mainItems = data.flatMap((d) => d.items);
      setItems(mainItems);
      navigate(`/shorts/${mainItems[0].id.videoId}`);
      console.log(mainItems[0].id.videoId);
      setCurrentIndex(0);
    } else {
      async function fetchVideoData(videoId) {
        try {
          const videoItem = await GetVideoData(videoId, VideoData1);
          console.log(videoItem);

          let obj = {
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

          // data
          let data = JSON.parse(localStorage.getItem("data"));
          setData(data);
          const mainItems = data.flatMap((d) => d.items);
          setItems([obj, ...mainItems]);
          navigate(`/shorts/${mainItems[0].id.videoId}`);
          console.log(mainItems[0].id.videoId);
          setCurrentIndex(0);
        } catch (err) {
          console.error("Fetch Data Error:" + err);
        }
      }

      // Fetch Video Data
      fetchVideoData(id);
    }
  }, []);

  // useEffect(() => {
  //   if (!data) return;

  //   const newChannelIds = new Set();
  //   const newVideoIds = new Set();

  //   const mainItems = data.flatMap((md) => md.items);
  //   setItems(mainItems);
  //   data.map((d) => {
  //     d.items.map((i) => {
  //       // ✅ add Channel ID
  //       if (i?.snippet?.channelId) {
  //         newChannelIds.add(i.snippet.channelId);
  //       }

  //       // ✅ add Video ID
  //       if (i?.id?.videoId) {
  //         newVideoIds.add(i.id.videoId);
  //       }
  //     });
  //   });

  //   setItemsChannelIds((prevSet) => {
  //     const mergedChannelIds = new Set(prevSet);
  //     newChannelIds.forEach((id) => mergedChannelIds.add(id));
  //     return Array.from(mergedChannelIds);
  //   });

  //   setItemsVideoIds((prevSet) => {
  //     const mergedVideoIds = new Set(prevSet);
  //     newVideoIds.forEach((id) => mergedVideoIds.add(id));
  //     return Array.from(mergedVideoIds);
  //   });
  // }, [data]);

  // ------------------------------------
  // Temp Data
  // ------------------------------------

  // useEffect(() => {
  //   console.log(channelsData);
  //   console.log(videosData);
  // }, [channelsData, videosData]);

  // ------------------------------------
  // Fetch Channel && video data function
  // ------------------------------------

  // useEffect(() => {
  //   // 📺 Video Data
  //   async function fetchVideoData(videoId) {
  //     try {
  //       const videoItem = await GetVideoData(videoId, VideoData1);
  //       setVideosData((prev) => ({
  //         ...prev,
  //         [videoId]: {
  //           channelId: videoItem?.snippet?.channelId || null,
  //           viewCount: videoItem?.statistics?.viewCount || null,
  //           likeCount: videoItem?.statistics?.likeCount || null,
  //           commentCount: videoItem?.statistics?.commentCount || null,
  //         },
  //       }));
  //     } catch (err) {
  //       console.error("Fetch Data Error:" + err);
  //     }
  //   }

  //   // 📺 Channel Data
  //   async function fetchChanaleData(ChanaleId) {
  //     try {
  //       const ChanaleItem = await GetChannelData(ChanaleId, VideoData1);
  //       setChannelsData((prev) => ({
  //         ...prev,
  //         [ChanaleId]: {
  //           customUrl: ChanaleItem?.snippet?.customUrl,
  //           thumbnails: ChanaleItem?.snippet?.thumbnails,
  //         },
  //       }));
  //     } catch (err) {
  //       console.error("Fetch Data Error:" + err);
  //     }
  //   }

  //   // main funtion
  //   async function callData() {
  //     if (itemsChannelIds.length === 0 || itemsVideoIds.length === 0) return;
  //     // 📺 Get all Video Data
  //     itemsVideoIds.map(async (vid) => {
  //       await fetchVideoData(vid);
  //     });

  //     // 📺 Get all Channel Data
  //     itemsChannelIds.map(async (cid) => {
  //       await fetchChanaleData(cid);
  //     });

  //     setItemsChannelIds([]);
  //     setItemsVideoIds([]);
  //   }

  //   // call funtion
  //   callData();

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [itemsChannelIds, itemsVideoIds, VideoData1]);

  // ----------------------------
  // Scroll or Button Navigation
  // ----------------------------

  function nextVid() {
    if (currentIndex < items.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      // URL update
      const nextVideoId = items[nextIndex]?.id?.videoId;
      if (nextVideoId) navigate(`/shorts/${nextVideoId}`);
    }
  }

  function prevVid() {
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      setCurrentIndex(prevIndex);
      // URL update
      const prevVideoId = items[prevIndex]?.id?.videoId;
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


    // Add listeners
    window.addEventListener("wheel", handleWheel);

    // Cleanup
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [currentIndex, items]); // dependency add korলাম

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
          item={items[currentIndex]}
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
        className="hidden lg:flex w-auto fixed bottom-0 right-2 h-full gap-3 flex-col items-center justify-center rounded-xl pointer-events-none"
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
          disabled={currentIndex === data?.items?.length - 1}
          className="pointer-events-auto w-[60px] h-[60px] bg-black/50 hover:bg-black/70 hover:scale-[0.95] transition-all duration-300 rounded-full flex justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm"
        >
          <MoveDown size={25} strokeWidth={2} className="text-white" />
        </button>
      </section>
    </main>
  );
}
