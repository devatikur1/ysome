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
          newChannelIds.forEach((id) => mergedChannelIds.add(id));
          return Array.from(mergedChannelIds);
        });

        // set ItemsVideoIds
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

        // {
        //     "kind": "youtube#video",
        //     "etag": "6LJtsR0ShVuWvbQEr_Su8FOIg7A",
        //     "id": "GyQjVtIGQg8",
        //     "snippet": {
        //         "publishedAt": "2018-02-07T22:04:04Z",
        //         "channelId": "UC40gs0opj389ohjLnJIAJzA",
        //         "title": "THE POKÉMON THEME - (METAL COVER) Jonathan Young & Jason Paige (the original singer)",
        //         "description": "THE POKÉMON THEME - (METAL COVER) Jonathan Young & Jason Paige (the original singer)\n►Listen on Spotify or Apple: https://ffm.to/jyocanime\n\n►Follow Jonathan: \nTiktok: https://www.tiktok.com/@jonathanymusic\nTwitch: https://www.twitch.tv/jonathanymusic\nTwitter: http://twitter.com/jonathanymusic\nInstagram: http://instagram.com/jonathanymusic\nFacebook: http://facebook.com/jonathanyoungmusic\nContact: jonathanyoungmusic@gmail.com\n\n►Merch: http://jonathanyoungmusic.com\n\n►Music Credits:\n    JASON PAIGE \n(singer of the original Pokémon theme)\n►Jason's website: https://jasonpaige.com/\n►Jason's YouTube: http://bit.ly/2sbUtxS\n\nVideo & music production by Villainous Media \nhttps://www.youtube.com/channel/UCRSwcIeyWSxjEr5qJpuMeWw\n\nBuy Jason's OFFICIAL FLYING TIE:\nhttps://jasonpaige.com/product/jason-paige-official-flying-tie/\n\n\nGetting the opportunity to reimagine the Pokémon theme and sing it alongside Jason Paige was super cool. We recorded this all independently in our own studios and shot it with the help of my independent production company, Villainous Media in San Diego CA. Power to the artists & fans who make it possible for people to create stuff like this.\n\nVideo & music production by Villainous Media \nhttps://www.youtube.com/channel/UCRSwcIeyWSxjEr5qJpuMeWw",
        //         "thumbnails": {
        //             "default": {
        //                 "url": "https://i.ytimg.com/vi/GyQjVtIGQg8/default.jpg",
        //                 "width": 120,
        //                 "height": 90
        //             },
        //             "medium": {
        //                 "url": "https://i.ytimg.com/vi/GyQjVtIGQg8/mqdefault.jpg",
        //                 "width": 320,
        //                 "height": 180
        //             },
        //             "high": {
        //                 "url": "https://i.ytimg.com/vi/GyQjVtIGQg8/hqdefault.jpg",
        //                 "width": 480,
        //                 "height": 360
        //             },
        //             "standard": {
        //                 "url": "https://i.ytimg.com/vi/GyQjVtIGQg8/sddefault.jpg",
        //                 "width": 640,
        //                 "height": 480
        //             },
        //             "maxres": {
        //                 "url": "https://i.ytimg.com/vi/GyQjVtIGQg8/maxresdefault.jpg",
        //                 "width": 1280,
        //                 "height": 720
        //             }
        //         },
        //         "channelTitle": "Jonathan Young",
        //         "tags": [
        //             "pokémon theme",
        //             "pokémon song",
        //             "pokemon theme",
        //             "pokemon song",
        //             "pokemon jason paige",
        //             "pokemon jonathan young",
        //             "pokemon theme jonathan young",
        //             "pokemon opening",
        //             "pokemon metal",
        //             "pokemon theme metal",
        //             "pokemon punk goes",
        //             "pokemon power metal",
        //             "pokemon cover",
        //             "pokemon version",
        //             "pokemon singer",
        //             "pokejon",
        //             "pokemon music",
        //             "pokemon theme remix",
        //             "pokemon theme cover",
        //             "pokemon theme new",
        //             "pokemon new song"
        //         ],
        //         "categoryId": "10",
        //         "liveBroadcastContent": "none",
        //         "defaultLanguage": "en",
        //         "localized": {
        //             "title": "THE POKÉMON THEME - (METAL COVER) Jonathan Young & Jason Paige (the original singer)",
        //             "description": "THE POKÉMON THEME - (METAL COVER) Jonathan Young & Jason Paige (the original singer)\n►Listen on Spotify or Apple: https://ffm.to/jyocanime\n\n►Follow Jonathan: \nTiktok: https://www.tiktok.com/@jonathanymusic\nTwitch: https://www.twitch.tv/jonathanymusic\nTwitter: http://twitter.com/jonathanymusic\nInstagram: http://instagram.com/jonathanymusic\nFacebook: http://facebook.com/jonathanyoungmusic\nContact: jonathanyoungmusic@gmail.com\n\n►Merch: http://jonathanyoungmusic.com\n\n►Music Credits:\n    JASON PAIGE \n(singer of the original Pokémon theme)\n►Jason's website: https://jasonpaige.com/\n►Jason's YouTube: http://bit.ly/2sbUtxS\n\nVideo & music production by Villainous Media \nhttps://www.youtube.com/channel/UCRSwcIeyWSxjEr5qJpuMeWw\n\nBuy Jason's OFFICIAL FLYING TIE:\nhttps://jasonpaige.com/product/jason-paige-official-flying-tie/\n\n\nGetting the opportunity to reimagine the Pokémon theme and sing it alongside Jason Paige was super cool. We recorded this all independently in our own studios and shot it with the help of my independent production company, Villainous Media in San Diego CA. Power to the artists & fans who make it possible for people to create stuff like this.\n\nVideo & music production by Villainous Media \nhttps://www.youtube.com/channel/UCRSwcIeyWSxjEr5qJpuMeWw"
        //         },
        //         "defaultAudioLanguage": "en"
        //     },
        //     "statistics": {
        //         "viewCount": "15538594",
        //         "likeCount": "206723",
        //         "favoriteCount": "0",
        //         "commentCount": "10047"
        //     }
        // }

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
    async function fetchChanaleData(ChanaleId) {
      try {
        const ChanaleItem = await GetChannelData(ChanaleId, apiKey);

        // {
        //     "kind": "youtube#channel",
        //     "etag": "rgUyYYe1X9wroaZMaSgJEDRdZvw",
        //     "id": "UCrrExa4aiTD4Udpf0aojMUA",
        //     "snippet": {
        //         "title": "BlazikenBlast257",
        //         "description": "I make simple gameplay videos, while also uploading anything else I find interesting\n",
        //         "customUrl": "@blazikenblast",
        //         "publishedAt": "2013-09-21T23:48:00Z",
        //         "thumbnails": {
        //             "default": {
        //                 "url": "https://yt3.ggpht.com/j2tr1sprpPFBEcsGaCbZROvx1rGJ2F2cLZ4B0qbYpJZcXnytrQwfaYDmojq5kbEqc6W5nBNz=s88-c-k-c0x00ffffff-no-rj",
        //                 "width": 88,
        //                 "height": 88
        //             },
        //             "medium": {
        //                 "url": "https://yt3.ggpht.com/j2tr1sprpPFBEcsGaCbZROvx1rGJ2F2cLZ4B0qbYpJZcXnytrQwfaYDmojq5kbEqc6W5nBNz=s240-c-k-c0x00ffffff-no-rj",
        //                 "width": 240,
        //                 "height": 240
        //             },
        //             "high": {
        //                 "url": "https://yt3.ggpht.com/j2tr1sprpPFBEcsGaCbZROvx1rGJ2F2cLZ4B0qbYpJZcXnytrQwfaYDmojq5kbEqc6W5nBNz=s800-c-k-c0x00ffffff-no-rj",
        //                 "width": 800,
        //                 "height": 800
        //             }
        //         },
        //         "localized": {
        //             "title": "BlazikenBlast257",
        //             "description": "I make simple gameplay videos, while also uploading anything else I find interesting\n"
        //         }
        //     }
        // }

        setChannelsData((prev) => ({
          ...prev,
          [ChanaleId]: ChanaleItem,
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

  useEffect(() => {
    console.log(channelsData);
    console.log(videosData);
  }, [channelsData, videosData]);

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
