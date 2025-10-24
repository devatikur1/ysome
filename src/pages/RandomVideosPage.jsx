import React, { useContext, useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { UiContext } from "../contexts/Ui/UiContext";
import RandomVideosPart from "../components/randomVideosComponent/RandomVideosPart";
import YouTubeLoading from "../components/randomVideosComponent/YouTubeLoading";
import NoInterNetComponent from "../components/custom/NoInterNetComponent";
import {
  apiKey1,
  apiKey2,
  apiKey3,
  apiKey4,
  apiKey5,
  apiKey6,
  VideoData1,
} from "../utils/data";
import { useScroll } from "motion/react";
import { GetDataWithSearch } from "../utils/GetDataWithSearch";
import { GetChannelData } from "../utils/GetChannelData";
import { GetVideoData } from "../utils/GetVideoData";

export default function RandomVideosPage() {
  // apikeys
  const apiKeys = [apiKey1, apiKey2, apiKey3, apiKey4, apiKey5, apiKey6];

  // Context
  const { isReSideBarShow, HomePageOutletWidth, HomePageHeight } =
    useContext(UiContext);

  // api key index
  const [apiIndex, setApiIndex] = useState(0);

  // Parent Width
  const [apiKey, setApiKey] = useState(apiKeys[apiIndex]);

  // containerRef
  const containerRef = useRef(null);

  // containerRef
  const scrollTriggeredRef = useRef(false);

  // Loading & Error
  const [pageLoading, setPageLoading] = useState(false);
  const [pageError, setPageError] = useState(false);

  // Grid Columns
  const [gridCols, setGridCols] = useState("grid-cols-1");

  // Items & Next Page Tokens & Maxmimam result
  const [items, setItems] = useState([]);

  const [itemsChannelIds, setItemsChannelIds] = useState([]);
  const [itemsVideoIds, setItemsVideoIds] = useState([]);
  const [videosData, setVideosData] = useState({});
  const [channelsData, setChannelsData] = useState({});

  const [nextPageTokens, setNextPageTokens] = useState([]);
  const [resultsCount, setResultsCount] = useState(0);

  // ref isRefReady
  const [isRefReady, setIsRefReady] = useState(false);

  // Queries
  const queries = [
    "Islamic Gojol Urdu",
    "Islamic Gojol Bangla",
    "Bangladesh history documentary",
  ];

  // -------------------------
  // Update grid columns
  // -------------------------

  useEffect(() => {
    if (HomePageOutletWidth >= 1920) setGridCols("grid-cols-4");
    else if (HomePageOutletWidth >= 1024) setGridCols("grid-cols-3");
    else if (HomePageOutletWidth >= 768) setGridCols("grid-cols-2");
    else setGridCols("grid-cols-1");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isReSideBarShow, HomePageOutletWidth]);

  // -------------------------
  // Fetch data function
  // -------------------------
  const fetchData = async ({ maxResults, nxtPgTokens }) => {
    try {
      setPageError(false);
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

      // Handle result
      // const results = JSON.parse(localStorage.getItem("data"));

      const newNextTokens = [];
      const newChannelIds = new Set();
      const newVideoIds = new Set();

      if (results.some((r) => (r === null ? false : true))) {
        results.forEach((data, idx) => {
          if (!data?.items) return;

          setResultsCount((p) => p + data.items.length);
          setItems((prev) => {
            const existingIds = new Set(prev.map((i) => i?.id?.videoId));
            const filtered = data.items.filter(
              (i) => !existingIds.has(i?.id?.videoId)
            );
            return [...prev, ...filtered];
          });

          data.items.forEach((d) => {
            // ✅ Channel ID add
            if (d?.snippet?.channelId) {
              newChannelIds.add(d.snippet.channelId);
            }

            // ✅ Video ID add
            if (d?.id?.videoId) {
              newVideoIds.add(d.id.videoId);
            }
          });

          newNextTokens.push({
            query: queries[idx],
            token: data?.nextPageToken || null,
          });
        });

        setNextPageTokens(newNextTokens);

        setItemsChannelIds((prevSet) => {
          const merged = new Set(prevSet);
          newChannelIds.forEach((id) => merged.add(id));
          return Array.from(merged);
        });

        setItemsVideoIds((prevSet) => {
          const merged = new Set(prevSet);
          newVideoIds.forEach((id) => merged.add(id));
          return Array.from(merged);
        });

        setPageLoading(false);
      } else {
        setPageError(true);
        setPageLoading(false);
      }
    } catch (err) {
      console.error("Fetch Data Error:" + err);
      setPageError(true);
    }
  };

  // -------------------------
  // Fetch Chanale data function
  // -------------------------

  useEffect(() => {
    if (itemsChannelIds.length === 0 || itemsVideoIds.length === 0) return;

    // 📺 Get Channel Avatar
    async function fetchVideoData(videoId) {
      try {
        const videoItem = await GetVideoData(videoId, apiKey);
        console.log(videoItem?.statistics?.viewCount);
        
        setVideosData((prev) => ({
          ...prev,
          [videoId]: {
            viewCount: videoItem?.statistics?.viewCount || null,
            channelId: videoItem?.snippet?.channelId || null,
          },
        }));
      } catch (err) {
        console.error("Fetch Data Error:" + err);
      }
    }

    async function fetchChanaleData(ChanaleId) {
      try {
        const ChanaleItem = await GetChannelData(ChanaleId, apiKey);
        setChannelsData((prev) => ({
          ...prev,
          [ChanaleId]: {
            customUrl: ChanaleItem?.snippet?.customUrl,
            thumbnails: ChanaleItem?.snippet?.thumbnails,
          },
        }));
      } catch (err) {
        console.error("Fetch Data Error:" + err);
        // setVideoDataError(true);
      }
    }

    async function callData() {
      itemsVideoIds.map(async (vid) => {
        await fetchVideoData(vid);
      });
      itemsChannelIds.map(async (cid) => {
        await fetchChanaleData(cid);
      });
      setItemsChannelIds([]);
      setItemsVideoIds([]);
    }
    callData();
  }, [itemsChannelIds, itemsVideoIds, apiKey]);

  // -------------------------
  // Initial fetch
  // -------------------------

  useEffect(() => {
    setPageLoading(true);
    fetchData({
      maxResults: Math.floor(100 / queries.length),
      nxtPgTokens: nextPageTokens,
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // -------------------------
  // ApiKey pagination
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

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageError]);

  // -------------------------
  // Ref ready checking
  // -------------------------

  useEffect(() => {
    if (containerRef.current) {
      setIsRefReady(true);
    }
  }, [pageError, items]);

  // -------------------------
  // Scroll pagination
  // -------------------------

  const { scrollYProgress } = useScroll({
    container: containerRef,
  });

  useEffect(() => {
    if (!scrollYProgress) return;

    const unsubscribe = scrollYProgress.on("change", (value) => {
      console.log(value);
      console.log(value > 0.9);
      console.log(scrollTriggeredRef);
      if (
        value > 0.9 &&
        !pageLoading &&
        nextPageTokens.length > 0 &&
        !scrollTriggeredRef.current &&
        resultsCount < 501
      ) {
        scrollTriggeredRef.current = true;
        setPageLoading(true);
        console.log(value);

        fetchData({
          maxResults: Math.floor(60 / queries.length),
          nxtPgTokens: nextPageTokens,
        }).finally(() => {
          scrollTriggeredRef.current = false;
        });
      }
    });

    return () => unsubscribe();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRefReady, pageLoading, nextPageTokens.length]);

  // -------------------------
  // Temp
  // -------------------------

  useEffect(() => {
    console.log(videosData);
  }, [videosData]);

  // -------------------------
  // Render
  // -------------------------
  return (
    <>
      {!pageError && (
        <main
          ref={containerRef}
          style={{
            maxWidth: `${HomePageOutletWidth}px`,
            minWidth: `${HomePageOutletWidth}px`,
            width: `${HomePageOutletWidth}px`,
            maxHeight: `${HomePageHeight}px`,
            minHeight: `${HomePageHeight}px`,
            height: `${HomePageHeight}px`,
          }}
          className={clsx(
            "h-full grid gap-4 px-5 pt-8 pb-11 overflow-x-hidden overflow-y-auto custom-scroll",
            gridCols
          )}
        >
          {items.map((item, idx) => (
            <RandomVideosPart
              key={idx}
              item={item}
              videosData={videosData}
              channelsData={channelsData}
            />
          ))}

          {pageLoading === true &&
            [...Array(13)].map((_, i) => <YouTubeLoading key={i} />)}
        </main>
      )}
      {pageError && items?.length === 0 && (
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
            setPageLoading(true);
            fetchData({
              maxResults: Math.floor(100 / queries.length),
              nxtPgTokens: nextPageTokens,
            });
          }}
        />
      )}
    </>
  );
}
