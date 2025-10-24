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
} from "../utils/data";
import { GetDataWithSearch } from "../utils/GetDataWithSearch";
import { useScroll } from "motion/react";

export default function RandomVideosPage() {
  // apikeys
  const apiKeys = [apiKey1, apiKey2, apiKey3, apiKey4, apiKey5, apiKey6];

  // Context
  const { isReSideBarShow } = useContext(UiContext);

  //
  const [apiIndex, setApiIndex] = useState(0);

  // Parent Width
  const [apiKey, setApiKey] = useState(apiKeys[apiIndex]);

  // Parent Width && Height
  const [parentWidth, setParentWidth] = useState(
    window.innerWidth - (isReSideBarShow ? 250 : 60)
  );
  const [parentHeight, setParentHeight] = useState(window.innerHeight - 60);

  // containerRef
  const containerRef = useRef(null);

  // containerRef
  const scrollTriggeredRef = useRef({ current: false });

  // Loading & Error
  const [pageLoading, setPageLoading] = useState(false);
  const [pageError, setPageError] = useState(false);

  // Grid Columns
  const [gridCols, setGridCols] = useState("grid-cols-1");

  // Items & Next Page Tokens & Maxmimam result
  const [items, setItems] = useState([]);
  const [nextPageTokens, setNextPageTokens] = useState([]);
  const [resultsCount, setResultsCount] = useState(0);

  // ref isRefReady
  const [isRefReady, setIsRefReady] = useState(false);

  // Queries
  const queries = [
    "Hindi viral songs",
    "Viral Indian songs",
    "World history documentary",
    "Economy of Muslim countries analysis",
  ];

  // -------------------------
  // Handle window resize
  // -------------------------

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth - (isReSideBarShow ? 250 : 60);
      setParentWidth(width);
      setParentHeight(window.innerHeight - 60);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // -------------------------
  // Update grid columns
  // -------------------------

  useEffect(() => {
    if (parentWidth >= 1920) setGridCols("grid-cols-4");
    else if (parentWidth >= 1024) setGridCols("grid-cols-3");
    else if (parentWidth >= 768) setGridCols("grid-cols-2");
    else setGridCols("grid-cols-1");
  }, [parentWidth]);

  // -------------------------
  // Fetch data function
  // -------------------------
  const fetchData = async ({ maxResults, nxtPgTokens }) => {
    if (resultsCount > 500) return;
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
      // let results = JSON.parse(localStorage.getItem("data"));

      const newNextTokens = [];

      if (results.some((r) => (r === null ? false : true))) {
        results.forEach((data, idx) => {
          if (!data?.items) return;

          setTimeout(async () => {
            setResultsCount((p) => p + data.items.length);
            setItems((prev) => {
              const existingIds = new Set(prev.map((i) => i?.id?.videoId));
              const filtered = data.items.filter(
                (i) => !existingIds.has(i?.id?.videoId)
              );
              return [...prev, ...filtered];
            });

            newNextTokens.push({
              query: queries[idx],
              token: data?.nextPageToken || null,
            });
          }, 3000);
        });

        setNextPageTokens(newNextTokens);
      } else {
        setPageError(true);
      }
    } catch (err) {
      console.error("Fetch Data Error:" + err);
      setPageError(true);
    } finally {
      setPageLoading(false);
    }
  };

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
    container: isRefReady ? containerRef : undefined,
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value) => {
      if (
        value > 0.9 &&
        !pageLoading &&
        nextPageTokens.length > 0 &&
        !scrollTriggeredRef.current
      ) {
        console.log("update");
        setPageLoading(true);
        scrollTriggeredRef.current = true;
        fetchData({
          maxResults: Math.floor(60 / queries.length),
          nxtPgTokens: nextPageTokens,
        }).finally(() => {
          setTimeout(() => (scrollTriggeredRef.current = false), 300);
        });
        console.log("update-2");
      }
    });
    return () => unsubscribe();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    apiKey,
    isRefReady,
    scrollYProgress,
    pageLoading,
    scrollTriggeredRef,
    scrollTriggeredRef.current,
  ]);

  // -------------------------
  // Temp
  // -------------------------

  useEffect(() => {
    console.log(resultsCount);
    console.log(pageLoading);
  }, [resultsCount, pageLoading]);

  // -------------------------
  // Render
  // -------------------------
  return (
    <>
      {!pageError && (
        <main
          ref={containerRef}
          style={{
            maxWidth: `${parentWidth}px`,
            minWidth: `${parentWidth}px`,
            width: `${parentWidth}px`,
            maxHeight: `${parentHeight}px`,
            minHeight: `${parentHeight}px`,
            height: `${parentHeight}px`,
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
              apikey={apiKey}
              setPageError={setPageError}
            />
          ))}

          {pageLoading === true &&
            [...Array(13)].map((_, i) => <YouTubeLoading key={i} />)}
        </main>
      )}
      {pageError && items?.length === 0 && (
        <NoInterNetComponent
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
