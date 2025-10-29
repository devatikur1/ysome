/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import { UiContext } from "./UiContext";
import { GetDataWithSearch } from "../../utils/GetDataWithSearch";
import { GetVideoData } from "../../utils/GetVideoData";
import { GetChannelData } from "../../utils/GetChannelData";
import {
  apiKey1,
  apiKey2,
  apiKey3,
  apiKey4,
  apiKey5,
  apiKey6,
  VideoData2,
  VideoData3,
} from "../../utils/data";

export default function UiContextProvider({ children }) {
  const [isSearchShow, setIsSearchShow] = useState(false);
  const searchBtnRef = useRef(null);
  const [isNotificationShow, setNotificationShow] = useState(false);
  const notificationBtnRef = useRef(null);
  const [isReSideBarShow, setIsReSideBarShow] = useState(() => {
    const saved = localStorage.getItem("isReSideBarShow");
    return saved !== null ? JSON.parse(saved) : true;
  });

  useEffect(() => {
    localStorage.setItem("isReSideBarShow", JSON.stringify(isReSideBarShow));
  }, [isReSideBarShow]);

  // some
  const [HomePageWidth, setHomePageWidth] = useState(`${window.innerWidth}px`);
  const [HomePageHeight, setHomePageHeight] = useState(
    `${window.innerHeight - 60}px`
  );
  const [HomePageOutletWidth, setHomePageOutletWidth] = useState(() => {
    if (window.innerWidth <= 768) {
      return `${window.innerWidth}px`;
    } else {
      let width = window.innerWidth - (isReSideBarShow ? 260 : 60);
      return `${width}px`;
    }
  });

  // apikeys
  const apiKeys = [apiKey1, apiKey2, apiKey3, apiKey4, apiKey5, apiKey6];

  // api key index
  const [apiIndex, setApiIndex] = useState(0);

  // Parent Width
  const [apiKey, setApiKey] = useState(VideoData2);

  // Items & Next Page Tokens & Maxmimam result
  const [items, setItems] = useState([]);

  const [itemsChannelIds, setItemsChannelIds] = useState([]);
  const [itemsVideoIds, setItemsVideoIds] = useState([]);
  const [videosData, setVideosData] = useState({});
  const [channelsData, setChannelsData] = useState({});

  const [nextPageTokens, setNextPageTokens] = useState([]);
  const [resultsCount, setResultsCount] = useState(0);

  // Loading & Error
  const [pageLoading, setPageLoading] = useState(false);
  const [pageError, setPageError] = useState(false);

  let queries = [
    "pokemon unova region theme song in hindi",
    "pokemon bw adventures in unova theme song in hindi",
    "pokemon theme songs",
  ];

  // -------------------------
  // Change main page size with reload nad resize
  // -------------------------

  useEffect(() => {
    const handleResize = () => {
      setHomePageWidth(window.innerWidth);
      setHomePageHeight(window.innerHeight - 60);
      if (window.innerWidth <= 768) {
        setHomePageOutletWidth(window.innerWidth);
      } else {
        let width = window.innerWidth - (isReSideBarShow ? 260 : 60);
        setHomePageOutletWidth(width);
      }
    };

    handleResize();

    // add listener
    window.addEventListener("resize", handleResize);

    // cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isReSideBarShow]);

  // -------------------------
  // Fetch data function
  // -------------------------

  const fetchData = async ({ maxResults, nxtPgTokens }) => {
    try {
      setPageError(false);

      // Handle using api result
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
      // Handle test er loge result

      const newNextTokens = [];
      const newChannelIds = new Set();
      const newVideoIds = new Set();

      if (results.some((r) => (r === null ? false : true))) {
        results.forEach((data, idx) => {
          if (!data?.items) return;

          setItems((prev) => {
            const existingIds = new Set(prev.map((i) => i?.id?.videoId));

            const filtered = data.items.filter(
              (i) => !existingIds.has(i?.id?.videoId)
            );
            return [...prev, ...filtered];
          });

          data.items.forEach((i) => {
            // ✅ add Channel ID
            if (i?.snippet?.channelId) {
              newChannelIds.add(i.snippet.channelId);
            }

            // ✅ add Video ID
            if (i?.id?.videoId) {
              newVideoIds.add(i.id.videoId);
            }
          });

          newNextTokens.push({
            query: queries[idx],
            token: data?.nextPageToken || null,
          });
        });

        setNextPageTokens(newNextTokens);

        setItemsChannelIds((prevSet) => {
          const mergedChannelIds = new Set(prevSet);
          newChannelIds.forEach((id) => mergedChannelIds.add(id));
          return Array.from(mergedChannelIds);
        });

        setItemsVideoIds((prevSet) => {
          const mergedVideoIds = new Set(prevSet);
          newVideoIds.forEach((id) => mergedVideoIds.add(id));
          return Array.from(mergedVideoIds);
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

  // ------------------------------------
  // Fetch Channel && video data function
  // ------------------------------------

  useEffect(() => {
    // 📺 Video Data
    async function fetchVideoData(videoId) {
      try {
        const videoItem = await GetVideoData(videoId, apiKey);
        setVideosData((prev) => ({
          ...prev,
          [videoId]: {
            viewCount: videoItem?.statistics?.viewCount || null,
            channelId: videoItem?.snippet?.channelId || null,
          },
        }));
      } catch (err) {
        console.error("Fetch Data Error:" + err);
        setPageError(true);
      }
    }

    // 📺 Channel Data
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
        setPageError(true);
      }
    }

    // main funtion
    async function callData() {
      if (itemsChannelIds.length === 0 || itemsVideoIds.length === 0) return;
      // 📺 Get all Video Data
      itemsVideoIds.map(async (vid) => {
        await fetchVideoData(vid);
      });

      // 📺 Get all Channel Data
      itemsChannelIds.map(async (cid) => {
        await fetchChanaleData(cid);
      });

      setItemsChannelIds([]);
      setItemsVideoIds([]);
    }

    // call funtion
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
  }, []);

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
          nxtPgTokens: nextPageTokens,
        });
      }
    }
  }, [pageError]);

  // context value
  const value = {
    // Search
    isSearchShow,
    setIsSearchShow,
    searchBtnRef,

    // Notifications
    isNotificationShow,
    setNotificationShow,
    notificationBtnRef,

    // relative sidebar
    isReSideBarShow,
    setIsReSideBarShow,

    // some
    HomePageWidth,
    HomePageHeight,
    HomePageOutletWidth,

    queries,

    // Items & Next Page Tokens & Maxmimam result
    items,
    setItems,

    itemsChannelIds,
    setItemsChannelIds,

    itemsVideoIds,
    setItemsVideoIds,

    videosData,
    setVideosData,

    channelsData,
    setChannelsData,

    nextPageTokens,
    setNextPageTokens,

    resultsCount,
    setResultsCount,

    pageLoading,
    setPageLoading,

    pageError,
    setPageError,

    fetchData,

    // future values like theme, modalOpen, etc. will go here
  };

  return <UiContext.Provider value={value}>{children}</UiContext.Provider>;
}
