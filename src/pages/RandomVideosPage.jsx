/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { UiContext } from "../contexts/Ui/UiContext";
import RandomVideosPart from "../components/randomVideosComponent/RandomVideosPart";
import ErrorPage from "../components/custom/ErrorPage";
import { useScroll } from "motion/react";
import { AppContext } from "../contexts/App/AppContext";
import { RelatedSkeleton } from "../components/custom/LoadingComponent";

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
  const [scrollTriggered, setScrollTriggered] = useState(false);

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
        value > 0.9 &&
        !pageLoading &&
        nextPageTokens.length > 0 &&
        !scrollTriggered &&
        resultsCount < 501
      ) {
        setScrollTriggered(true);
        setPageLoading(true);
        fetchData({
          maxResults: Math.floor(60 / queries.length),
          nxtPgTokens: nextPageTokens,
        }).finally(() => {
          setScrollTriggered(false);
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
          "h-full grid gap-4 px-5 pt-8 pb-11 overflow-x-hidden",
          gridCols
        )}
      >
        <>
          {!pageError && (
            <>
              {items.map((item, idx) => (
                <RandomVideosPart
                  key={idx}
                  item={item}
                  videosData={videosData?.[item?.id?.videoId]}
                  channelsData={channelsData?.[item?.snippet?.channelId]}
                />
              ))}

              {pageLoading &&
                [...Array(15)].map((_, i) => <RelatedSkeleton key={i} />)}
            </>
          )}
          {pageError && (
            <ErrorPage
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
      </main>
    </>
  );
}
