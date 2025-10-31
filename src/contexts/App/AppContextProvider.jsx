/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { AppContext } from "./AppContext";
import {
  apiKey1,
  apiKey2,
  apiKey3,
  apiKey4,
  apiKey5,
  apiKey6,
  VideoData1,
  VideoData2,
} from "../../utils/data";
import { GetDataWithSearch } from "../../utils/GetDataWithSearch";
import { GetVideoData } from "../../utils/GetVideoData";
import { GetChannelData } from "../../utils/GetChannelData";

export default function AppContextProvider({ children }) {
  let queries = [
    "pokemon unova region theme song in hindi",
    "pokemon bw adventures in unova theme song in hindi",
    "pokemon theme songs",
  ];

  // apikeys
  const apiKeys = [
    VideoData2,
    VideoData1,
    apiKey1,
    apiKey2,
    apiKey3,
    apiKey4,
    apiKey5,
    apiKey6,
  ];

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

  // Loading & Error
  const [pageLoading, setPageLoading] = useState(false);
  const [pageError, setPageError] = useState(false);

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

      // const results = JSON.parse(localStorage.getItem("c"));
      // console.log(results);

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

        // set newNextTokens
        setNextPageTokens(newNextTokens);

        // set ItemsChannelIds
        setItemsChannelIds((prevSet) => {
          const mergedChannelIds = new Set(prevSet);
          Array.from(newChannelIds).forEach((id) => mergedChannelIds.add(id));
          return Array.from(mergedChannelIds);
        });

        // set ItemsVideoIds
        setItemsVideoIds((prevSet) => {
          const mergedVideoIds = new Set(prevSet);
          Array.from(newVideoIds).forEach((id) => mergedVideoIds.add(id));
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
          [videoId]: videoItem,
        }));
      } catch (err) {
        console.error("Fetch Data Error:" + err);
        setPageError(true);
      }
    }

    // 📺 Channel Data
    async function fetchChannelData(ChanaleId) {
      try {
        const ChanaleItem = await GetChannelData(ChanaleId, apiKey);

        setChannelsData((prev) => ({
          ...prev,
          [ChanaleId]: ChanaleItem,
        }));
      } catch (err) {
        console.error("Fetch Data Error:" + err);
        setPageError(true);
      }
    }

    // 🚀⏳...🔔 Main async function
    async function callData() {
      if (itemsChannelIds.length === 0 || itemsVideoIds.length === 0) return;

      try {
        await Promise.all([
          Promise.all(itemsVideoIds.map((vid) => fetchVideoData(vid))),
          Promise.all(itemsChannelIds.map((cid) => fetchChannelData(cid))),
        ]);
        console.log("✅ All data fetch!");
      } catch (error) {
        console.log(error);
      } finally {
        setTimeout(() => {
          setItemsChannelIds([]);
          setItemsVideoIds([]);
        }, 100);
      }
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

    pageLoading,
    setPageLoading,

    pageError,
    setPageError,

    fetchData,

    apiKey,
    // future values like theme, modalOpen, etc. will go here
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
