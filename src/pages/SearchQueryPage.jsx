/* eslint-disable react-hooks/exhaustive-deps */

import React, { useContext, useEffect, useRef, useState } from "react";
import { UiContext } from "../contexts/Ui/UiContext";
import ErrorPage from "../components/custom/ErrorPage";
import SearchVideosPart from "../components/SearchQueryComponent/SearchVideosPart";
import clsx from "clsx";
import { GetSearchFn } from "../utils/GetSearchFn";
import { RelatedSkeleton } from "../components/custom/LoadingComponent";
import { useLocation } from "react-router-dom";
import { useScroll } from "motion/react";

export default function SearchQueryPage() {
  // Context
  const { gridCols, HomePageOutletWidth, HomePageHeight } =
    useContext(UiContext);
  const containerRef = useRef(null);
  const [scrollTriggered, setScrollTriggered] = useState(false);

  const [items, setItems] = useState([]);
  const [itemsToken, setItemsToken] = useState("");
  const [pageLoading, setPageLoading] = useState(false);
  const [pageError, setPageError] = useState(false);
  const [q, setQ] = useState("");

  async function callData({ q, tk }) {
    let it = await GetSearchFn({ query: q, token: tk });
    setItems((p) => [...p, ...it?.data]);
    setItemsToken(it?.continuation);
  }

  let location = useLocation();

  // -------------------------
  // Initial fetch
  // -------------------------

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const q = params.get("q") || "";
    setQ(q);

    async function fetchData() {
      try {
        setPageLoading(true);
        setPageError(false);
        await callData({ q, tk: itemsToken });
      } catch (err) {
        console.error(err);
        setPageError(true);
      } finally {
        setPageLoading(false);
      }
    }

    fetchData();
  }, [location]);

  // ------------------------------
  // Scroll base get videos data
  // ------------------------------

  const { scrollYProgress } = useScroll({ container: containerRef });

  useEffect(() => {
    if (!scrollYProgress) return;

    const unsubscribe = scrollYProgress.on("change", (value) => {
      if (value > 0.9 && !pageLoading && itemsToken && !scrollTriggered) {
        setScrollTriggered(true);
        setPageLoading(true);
        callData({ q: q, tk: itemsToken }).finally(() => {
          setScrollTriggered(false);
        });
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress, pageLoading, itemsToken, scrollTriggered, q]);

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
                <SearchVideosPart key={idx} item={item} />
              ))}

              {pageLoading &&
                [...Array(15)].map((_, i) => <RelatedSkeleton key={i} />)}
            </>
          )}

          {pageError && items.length === 0 && (
            <ErrorPage
              fetchData={async () => {
                setPageLoading(true);
                await callData({ q, tk: "" });
                setPageLoading(false);
              }}
            />
          )}
        </>
      </main>
    </>
  );
}
