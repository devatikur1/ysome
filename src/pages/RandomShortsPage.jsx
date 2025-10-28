/* eslint-disable react-hooks/exhaustive-deps */
import { MoveDown, MoveUp } from "lucide-react";
import React, {
  useContext,
  useEffect,
  useState,
  useCallback,
  useRef,
} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UiContext } from "../contexts/Ui/UiContext";
import RandomShortsPart from "../components/RandomShortsComponent/RandomShortsPart";
import {
  apiKey1,
  apiKey2,
  apiKey3,
  apiKey4,
  apiKey5,
  apiKey6,
  VideoData1,
  VideoData2,
  VideoData3,
} from "../utils/data";
import { GetChannelData } from "../utils/GetChannelData";
import { GetVideoData } from "../utils/GetVideoData";
import { GetDataWithSearch } from "../utils/GetDataWithSearch";
import NoInterNetComponent from "../components/custom/NoInterNetComponent";

export default function RandomShortsPage() {
  const { HomePageOutletWidth, HomePageHeight } = useContext(UiContext);
  const params = useParams();
  const navigate = useNavigate();
  // apikeys
  const apiKeys = [apiKey1, apiKey2, apiKey3, apiKey4, apiKey5, apiKey6];

  // api key index
  const [apiIndex, setApiIndex] = useState(0);

  // Parent Width
  const [apiKey, setApiKey] = useState(VideoData2);

  // State management
  const [VideoID, setVideoID] = useState(Object.values(params)[0] || "");
  const [pageLoading, setPageLoading] = useState(false);
  const [pageError, setPageError] = useState(false);
  const [items, setItems] = useState([]);

  // exitsChannel Data & IDs management
  const [exitsChannelIds, setExitsChannelIds] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("ExitsChannelIds")) || [];
    } catch {
      return [];
    }
  });

  // Channel
  const [itemsChannelIds, setItemsChannelIds] = useState([]);
  const [channelsData, setChannelsData] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("ExitsChannelData")) || {};
    } catch {
      return {};
    }
  });
  const [nextPageTokens, setNextPageTokens] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [queries] = useState([
    "Islamic Gojol Urdu",
    "Islamic Gojol Bangla",
    "Bangladesh history documentary",
  ]);

  // Refs to track pending channel fetches
  const isInitialMount = useRef(true);

  // -------------------------
  // Fetch data function
  // -------------------------

  async function fetchData({ maxResults, nxtPgTokens }) {
    if (!queries || queries.length === 0) {
      setPageError(true);
      setPageLoading(false);
      return null;
    }

    try {
      setPageError(false);
      setPageLoading(true);

      const results = await Promise.all(
        queries.map((q, idx) =>
          GetDataWithSearch({
            maxResults,
            query: q,
            nxtPgToken: nxtPgTokens?.[idx]?.token || "",
            key: apiKey,
          })
        )
      );

      const hasValidResults = results.some((r) => r !== null);

      if (hasValidResults) {
        setPageLoading(false);
        return results;
      } else {
        setPageError(true);
        setPageLoading(false);
        return null;
      }
    } catch (err) {
      console.error("Fetch Data Error:", err);
      setPageError(true);
      setPageLoading(false);
      return null;
    }
  }

  // -----------------------------------------------------------------------
  // Extract Channel IDs 😒 alada kore ante hobe tai eke barti kore ante hoy
  // -----------------------------------------------------------------------

  useEffect(() => {
    if (items.length === 0) return;
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
  }, [items]);

  // -------------------------
  // Fetch Channel Data
  // -------------------------

  useEffect(() => {
    // 📺 Channel Data
    async function fetchChanaleData(ChanaleId) {
      try {
        const ChanaleItem = await GetChannelData(ChanaleId, apiKey);
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
      itemsChannelIds.forEach(async (cid) => {
        await fetchChanaleData(cid);
      });

      setItemsChannelIds([]);
    }

    // call funtion
    callData();
  }, [itemsChannelIds, apiKey]);

  // -------------------------
  // Initial fetch
  // -------------------------

  useEffect(() => {
    if (!isInitialMount.current) return;
    isInitialMount.current = false;

    const id = Object.values(params)[0];
    console.log("Video ID from params:", id);

    async function fetchVideoData() {
      try {
        const results = await fetchData({
          maxResults: Math.floor(100 / queries.length),
          nxtPgTokens: [],
        });

        if (results === null) {
          setPageError(true);
          return;
        }

        const newNextTokens = [];
        const existingItems = results.flatMap((d) => d?.items || []);

        results.forEach((data, idx) => {
          newNextTokens.push({
            query: queries[idx],
            token: data?.nextPageToken || null,
          });
        });

        setNextPageTokens(newNextTokens);

        if (!id || id === "") {
          // No specific video ID, use first item
          if (existingItems.length > 0) {
            setItems(existingItems);
            const mountVideoId = existingItems[0]?.id?.videoId;
            setVideoID(mountVideoId);
            navigate(`/shorts/${mountVideoId}`, { replace: true });
            setCurrentIndex(0);
          }
        } else {
          // Fetch specific video data
          const videoItem = await GetVideoData(id, apiKey);

          if (!videoItem) {
            console.error("Video not found");
            setPageError(true);
            return;
          }

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

          const mainItems = [obj, ...existingItems];
          setItems(mainItems);
          setVideoID(id);
          setCurrentIndex(0);
        }
      } catch (err) {
        console.error("Fetch Data Error:", err);
        setPageError(true);
      }
    }

    fetchVideoData();
  }, []);

  // ----------------------------
  // Navigation Functions
  // ----------------------------
  const nextVid = useCallback(() => {
    if (currentIndex < items.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      const nextVideoId = items[nextIndex]?.id?.videoId;
      if (nextVideoId) {
        setVideoID(nextVideoId);
        navigate(`/shorts/${nextVideoId}`, { replace: true });
      }
    }
  }, [currentIndex, items, navigate]);

  const prevVid = useCallback(() => {
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      setCurrentIndex(prevIndex);
      const prevVideoId = items[prevIndex]?.id?.videoId;
      if (prevVideoId) {
        setVideoID(prevVideoId);
        navigate(`/shorts/${prevVideoId}`, { replace: true });
      }
    }
  }, [currentIndex, items, navigate]);

  // ----------------------------
  // Wheel & Keyboard Events
  // ----------------------------
  useEffect(() => {
    let wheelTimeout;

    const handleWheel = (e) => {
      clearTimeout(wheelTimeout);
      wheelTimeout = setTimeout(() => {
        if (e.deltaY > 40) nextVid();
        else if (e.deltaY < -40) prevVid();
      }, 50); // Debounce wheel events
    };

    const handleKeyDown = (e) => {
      if (e.key === "ArrowDown") nextVid();
      else if (e.key === "ArrowUp") prevVid();
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(wheelTimeout);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [nextVid, prevVid]);

  // -------------------------
  // ApiKey chnager
  // -------------------------

  useEffect(() => {
    if (pageError) {
      if (apiIndex < apiKeys.length - 1) {
        const newKey = apiKeys[apiIndex + 1];
        setApiIndex((p) => p + 1);
        setApiKey(newKey);
        setPageLoading(true);
        fetchData({
          maxResults: Math.floor(100 / queries.length),
          nxtPgTokens: null,
        });
      }
    }
  }, [pageError]);

  // ----------------------------
  // Render
  // ----------------------------
  return (
    <main
      style={{
        width: `${HomePageOutletWidth}px`,
        maxWidth: `${HomePageOutletWidth}px`,
        minWidth: `${HomePageOutletWidth}px`,
        height: `${HomePageHeight}px`,
        maxHeight: `${HomePageHeight}px`,
        minHeight: `${HomePageHeight}px`,
      }}
      className="relative flex flex-col overflow-x-hidden overflow-y-auto snap-y snap-mandatory scroll-smooth scroll-none *:select-none"
    >
      {!pageError && items.length > 0 && (
        <>
          <section
            style={{
              width: `${HomePageOutletWidth}px`,
              maxWidth: `${HomePageOutletWidth}px`,
              minWidth: `${HomePageOutletWidth}px`,
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
              channelData={
                channelsData[items[currentIndex]?.snippet?.channelId]
              }
              isPrevDisabled={currentIndex === 0}
              isNextDisabled={currentIndex === items.length - 1}
              nextVid={nextVid}
              prevVid={prevVid}
            />
          </section>

          {/* Navigation Buttons */}
          <section
            style={{
              maxHeight: `${HomePageHeight}px`,
              height: `${HomePageHeight}px`,
              minHeight: `${HomePageHeight}px`,
            }}
            className="hidden md:flex w-auto fixed bottom-0 right-2 h-full gap-3 flex-col items-center justify-center rounded-xl pointer-events-none"
          >
            <button
              onClick={prevVid}
              disabled={currentIndex === 0}
              className="pointer-events-auto w-[60px] h-[60px] bg-black/50 hover:bg-black/70 hover:scale-[0.95] transition-all duration-300 rounded-full flex justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm"
              aria-label="Previous video"
            >
              <MoveUp size={25} strokeWidth={2} className="text-white" />
            </button>

            <button
              onClick={nextVid}
              disabled={currentIndex === items.length - 1}
              className="pointer-events-auto w-[60px] h-[60px] bg-black/50 hover:bg-black/70 hover:scale-[0.95] transition-all duration-300 rounded-full flex justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm"
              aria-label="Next video"
            >
              <MoveDown size={25} strokeWidth={2} className="text-white" />
            </button>
          </section>
        </>
      )}

      {pageError && (
        <NoInterNetComponent
          style={{
            maxWidth: `${HomePageOutletWidth}px`,
            minWidth: `${HomePageOutletWidth}px`,
            width: `${HomePageOutletWidth}px`,
            maxHeight: `${HomePageHeight}px`,
            minHeight: `${HomePageHeight}px`,
            height: `${HomePageHeight}px`,
          }}
          fetchData={() => {
            fetchData({
              maxResults: Math.floor(100 / queries.length),
              nxtPgTokens: nextPageTokens,
            });
          }}
        />
      )}

      {pageLoading && !pageError && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <div className="text-white">Loading...</div>
        </div>
      )}
    </main>
  );
}
