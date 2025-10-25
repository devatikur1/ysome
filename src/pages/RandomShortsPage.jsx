import { MoveDown, MoveUp } from "lucide-react";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { UiContext } from "../contexts/Ui/UiContext";
import RandomShortsPart from "../components/RandomShortsComponent/RandomShortsPart";

export default function RandomShortsPage() {
  const { isReSideBarShow, HomePageOutletWidth, HomePageHeight } =
    useContext(UiContext);

  const [currentIndex, setCurrentIndex] = useState(0);
  const { id } = useParams();
  const containerRef = useRef(null);
  const isScrolling = useRef(false);

  // Demo items
  const [data, setData] = useState(JSON.parse(localStorage.getItem("sd"))); 
  

  // Scroll to specific index
  const scrollToIndex = (index) => {
    if (containerRef.current) {
      const element = containerRef.current.children[index];
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        setCurrentIndex(index);
      }
    }
  };

  // Handle wheel scroll
  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();

      if (isScrolling.current) return;

      isScrolling.current = true;

      if (e.deltaY > 0) {
        // Scroll down
        if (currentIndex < data.items.length - 1) {
          scrollToIndex(currentIndex + 1);
        }
      } else {
        // Scroll up
        if (currentIndex > 0) {
          scrollToIndex(currentIndex - 1);
        }
      }

      setTimeout(() => {
        isScrolling.current = false;
      }, 800); // Debounce time
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
    };
  }, [currentIndex, data.items.length]);

  // Handle arrow buttons
  const handleNext = () => {
    if (currentIndex < data.items.length - 1) {
      scrollToIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      scrollToIndex(currentIndex - 1);
    }
  };

  return (
    <main
      ref={containerRef}
      style={{
        maxWidth: `${HomePageOutletWidth}px`,
        maxHeight: `${HomePageHeight}px`,
        minWidth: `${HomePageOutletWidth}px`,
        minHeight: `${HomePageHeight}px`,
      }}
      className="relative flex flex-col overflow-y-auto snap-y snap-mandatory scroll-smooth hide-scrollbar"
    >
      {data.items.map((i, idx) => (
        <section
          key={i?.id?.videoId}
          style={{
            minHeight: `${HomePageHeight}px`,
            maxHeight: `${HomePageHeight}px`,
          }}
          className="w-full flex justify-center items-center snap-start snap-always"
        >
          <RandomShortsPart
            style={{
              maxWidth: `${HomePageOutletWidth * 0.8}px`,
              maxHeight: `${HomePageHeight * 0.95}px`,
              minHeight: `${HomePageHeight * 0.95}px`,
            }}
            videoId={i?.id?.videoId}
            snippet={i?.snippet}
          />
        </section>
      ))}

      {/* Navigation Buttons */}
      <section
        style={{
          maxHeight: `${HomePageHeight}px`,
          Height: `${HomePageHeight}px`,
          minHeight: `${HomePageHeight}px`,
        }}
        className="hidden lg:flex w-auto fixed bottom-0 right-2 h-full gap-3 flex-col items-center justify-center rounded-xl pointer-events-none"
      >
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="pointer-events-auto w-[60px] h-[60px] bg-bg-pecondary hover:bg-bg-Primary hover:scale-[0.95] transition-all duration-300 rounded-full flex justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <MoveUp size={25} strokeWidth={2} />
        </button>

        <button
          onClick={handleNext}
          disabled={currentIndex === data.items.length - 1}
          className="pointer-events-auto w-[60px] h-[60px] bg-bg-pecondary hover:bg-bg-Primary hover:scale-[0.95] transition-all duration-300 rounded-full flex justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <MoveDown size={25} strokeWidth={2} />
        </button>
      </section>
    </main>
  );
}
