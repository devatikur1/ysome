/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { UiContext } from "../contexts/Ui/UiContext";
import RandomVideosPart from "../components/randomVideosComponent/RandomVideosPart";
import YouTubeLoading from "../components/randomVideosComponent/YouTubeLoading";
import NoInterNetComponent from "../components/custom/NoInterNetComponent";
import { useScroll } from "motion/react";
import { AppContext } from "../contexts/App/AppContext";

export default function RandomVideosPage() {
  // Context
  const { isReSideBarShow, HomePageOutletWidth, HomePageHeight } =
    useContext(UiContext);
  const {
    queries,

    // Items & Next Page Tokens & Maxmimam result
    items,

    videosData,

    channelsData,

    nextPageTokens,

    pageLoading,
    setPageLoading,

    pageError,

    fetchData,
  } = useContext(AppContext);

  // refs
  const containerRef = useRef(null);
  const scrollTriggeredRef = useRef(false);

  // Grid Columns
  const [gridCols, setGridCols] = useState("grid-cols-1");

  // resultsCount
  const [resultsCount, setResultsCount] = useState(0);

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
  // Update grid columns
  // -------------------------

  useEffect(() => {
    if (HomePageOutletWidth >= 1920) setGridCols("grid-cols-4");
    else if (HomePageOutletWidth >= 1024) setGridCols("grid-cols-3");
    else if (HomePageOutletWidth >= 768) setGridCols("grid-cols-2");
    else setGridCols("grid-cols-1");
  }, [isReSideBarShow, HomePageOutletWidth]);

  // ------------------------------
  // Scroll base get videos data
  // ------------------------------

  const { scrollYProgress } = useScroll({ container: containerRef });

  useEffect(() => {
    if (!scrollYProgress) return;

    const unsubscribe = scrollYProgress.on("change", (value) => {
      if (
        value > 0.98 &&
        !pageLoading &&
        nextPageTokens.length > 0 &&
        !scrollTriggeredRef.current &&
        resultsCount < 501
      ) {
        scrollTriggeredRef.current = true;
        setPageLoading(true);
        fetchData({
          maxResults: Math.floor(60 / queries.length),
          nxtPgTokens: nextPageTokens,
        }).finally(() => {
          scrollTriggeredRef.current = false;
        });
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress, pageLoading, nextPageTokens.length, resultsCount]);

  // -------------------------
  // set ResultsCount
  // -------------------------

  useEffect(() => {
    setResultsCount(items.length);
  }, [items]);

  // -------------------------
  // Render
  // -------------------------
  return (
    <>
      {!pageError && (
        <main
          ref={containerRef}
          style={{
            // width
            maxWidth: `${HomePageOutletWidth}px`,
            minWidth: `${HomePageOutletWidth}px`,
            width: `${HomePageOutletWidth}px`,

            // height
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
              videosData={videosData?.[item?.id?.videoId]}
              channelsData={channelsData?.[item?.snippet?.channelId]}
            />
          ))}

          {pageLoading === true &&
            [...Array(23)].map((_, i) => <YouTubeLoading key={i} />)}
        </main>
      )}
      {pageError && items?.length === 0 && (
        <NoInterNetComponent
          style={{
            // width
            maxWidth: `${HomePageOutletWidth}px`,
            minWidth: `${HomePageOutletWidth}px`,
            width: `${HomePageOutletWidth}px`,

            // height
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
