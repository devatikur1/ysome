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
import { GetVideoData } from "../utils/GetVideoData";
import { AppContext } from "../contexts/App/AppContext";
import { GetChannelData } from "../utils/GetChannelData";
import { FullPageLoader } from "../components/custom/LoadingComponent";

export default function RandomShortsPage() {
  const { HomePageOutletWidth, HomePageHeight } = useContext(UiContext);
  const {
    queries,

    // Items & Next Page Tokens & Maxmimam result
    items,

    channelsData,

    nextPageTokens,

    pageLoading,
    setPageLoading,

    pageError,
    setPageError,

    fetchData,

    apiKey,
  } = useContext(AppContext);

  const params = useParams();
  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [sitems, setSitems] = useState([]);
  const [CurrentID, setCurrentID] = useState("");
  const [sChannelsData, setSChannelsData] = useState({});

  // Refs to track pending channel fetches
  const isInitialMount = useRef(false);

  // -------------------------
  // Initial fetch
  // -------------------------

  useEffect(() => {
    if (items.length > 0) return;
    setPageLoading(true);
    fetchData({
      maxResults: Math.floor(100 / queries.length),
      nxtPgTokens: nextPageTokens,
    });
  }, []);

  // -------------------------
  // Sync items from context
  // -------------------------

  useEffect(() => {
    if (items && items.length > 0) {
      setSitems(items);
    }
  }, [items]);

  // Sync channelsData from context
  useEffect(() => {
    if (channelsData && Object.keys(channelsData).length > 0) {
      setSChannelsData(channelsData);
    }
  }, [channelsData]);

  // -------------------------
  // Initial fetch
  // -------------------------
  useEffect(() => {
    if (isInitialMount.current === false) return;
    isInitialMount.current = true;

    const id = Object.values(params)[0];

    async function fetchVideoData() {
      try {
        setPageLoading(true);

        if (!id || id === "") {
          // No specific video ID, use first item
          if (items?.length > 0) {
            const mountVideoId = items[0]?.id?.videoId;
            navigate(`/shorts/${mountVideoId}`, { replace: true });
            setCurrentIndex(0);
          }
        } else {
          // Fetch specific video data
          const videoItem = await GetVideoData(id, apiKey);

          if (videoItem == null) {
            console.error("Video not found");
            setPageError(true);
            return;
          }

          // Fetch channel data for this video
          if (videoItem?.snippet?.channelId) {
            fetchChannelData(videoItem.snippet.channelId);
          }

          const obj = {
            kind: videoItem?.kind,
            etag: videoItem?.etag,
            id: {
              kind: "youtube#video",
              videoId: videoItem?.id,
            },
            snippet: {
              publishedAt: videoItem?.snippet?.publishedAt,
              channelId: videoItem?.snippet?.channelId,
              title: videoItem?.snippet?.title,
              description: videoItem?.snippet?.description,
              thumbnails: videoItem?.snippet?.thumbnails,
              channelTitle: videoItem?.snippet?.channelTitle,
              liveBroadcastContent: videoItem?.snippet?.liveBroadcastContent,
              publishTime: videoItem?.snippet?.publishTime,
            },
          };

          const mainItems = [obj, ...items];
          setSitems(mainItems);
          const mountVideoId = mainItems[0]?.id?.videoId;
          navigate(`/shorts/${mountVideoId}`, { replace: true });
          setCurrentIndex(0);
        }
      } catch (err) {
        console.error("Fetch Data Error:", err);
        setPageError(true);
      } finally {
        setPageLoading(false);
        isInitialMount.current = false;
      }
    }

    fetchVideoData();
  }, []);

  // ----------------------------
  // Fetch channel data helper
  // ----------------------------

  const fetchChannelData = useCallback(
    async (channelId) => {
      if (!channelId) return;

      // Check if we already have this channel data
      if (sChannelsData[channelId]) return;

      try {
        const channelItem = await GetChannelData({
          channelId: channelId,
          key: apiKey,
        });
        setSChannelsData((prev) => ({
          ...prev,
          [channelId]: channelItem,
        }));
      } catch (err) {
        console.error("Fetch Channel Data Error:", err);
      }
    },
    [apiKey, sChannelsData]
  );

  // ----------------------------
  // Auto check channel data
  // ----------------------------

  useEffect(() => {
    if (sitems[sitems[currentIndex]?.snippet?.channelId]) return;

    const currentChannelId = sitems[currentIndex]?.snippet?.channelId;
    if (currentChannelId) {
      fetchChannelData(currentChannelId);
    }
  }, [currentIndex, sitems, fetchChannelData]);

  // ----------------------------
  // get data channelId
  // ----------------------------

  useEffect(() => {
    if (CurrentID !== "" && Object.values(channelsData).length !== 0) {
      let mDta = Object.values(channelsData).some((cid) =>
        cid === CurrentID ? true : false
      );
      if (mDta === true) {
        setSChannelsData(channelsData);
        setCurrentID("");
      } else {
        async function fetchChanaleData(ChanaleId) {
          try {
            const ChanaleItem = await GetChannelData({
              channelId: ChanaleId,
              key: apiKey,
            });
            setSChannelsData((prev) => ({
              ...prev,
              [ChanaleId]: ChanaleItem,
            }));
          } catch (err) {
            console.error("Fetch Data Error:" + err);
            setPageError(true);
          } finally {
            setCurrentID("");
          }
        }
        fetchChanaleData(CurrentID);
      }
    }
  }, [CurrentID, channelsData, apiKey]);

  // ------------------------------
  // update base get videos data
  // ------------------------------

  useEffect(() => {
    const shouldFetch =
      sitems.length - 6 < currentIndex &&
      nextPageTokens.length > 0 &&
      isInitialMount.current === false;

    if (shouldFetch) {
      isInitialMount.current = true;

      fetchData({
        maxResults: Math.floor(100 / queries.length),
        nxtPgTokens: nextPageTokens,
      })
        .catch((err) => {
          console.error("Auto-fetch error:", err);
        })
        .finally(() => {
          isInitialMount.current = false;
        });
    }
  }, [currentIndex, sitems.length, nextPageTokens, queries.length, fetchData]);

  // ----------------------------
  // Navigation Functions
  // ----------------------------

  const nextVid = () => {
    if (currentIndex < items.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      const nextVideoId = items[nextIndex]?.id?.videoId;
      if (nextVideoId) {
        navigate(`/shorts/${nextVideoId}`, { replace: true });
      }
    }
  };

  const prevVid = () => {
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      setCurrentIndex(prevIndex);
      const prevVideoId = items[prevIndex]?.id?.videoId;
      if (prevVideoId) {
        navigate(`/shorts/${prevVideoId}`, { replace: true });
      }
    }
  };

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
      {!pageError && (
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
            className="w-[100%] h-[100%] px-3 pt-2 flex justify-center items-center snap-start snap-always relative"
          >
            {sitems?.length > 0 && sitems?.[currentIndex] && (
              <RandomShortsPart
                style={{
                  maxWidth: `${HomePageOutletWidth}px`,
                }}
                HomePageHeight={HomePageHeight}
                VideoID={sitems?.[currentIndex]?.id?.videoId}
                item={sitems?.[currentIndex] || {}}
                channelData={
                  sChannelsData?.[sitems[currentIndex]?.snippet?.channelId] ||
                  {}
                }
                isPrevDisabled={currentIndex === 0}
                isNextDisabled={currentIndex === sitems?.length - 1}
                nextVid={nextVid}
                prevVid={prevVid}
              />
            )}
          </section>

          {pageLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/50">
              <FullPageLoader />
            </div>
          )}

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
              disabled={currentIndex === items?.length - 1}
              className="pointer-events-auto w-[60px] h-[60px] bg-black/50 hover:bg-black/70 hover:scale-[0.95] transition-all duration-300 rounded-full flex justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm"
              aria-label="Next video"
            >
              <MoveDown size={25} strokeWidth={2} className="text-white" />
            </button>
          </section>
        </>
      )}
    </main>
  );
}
