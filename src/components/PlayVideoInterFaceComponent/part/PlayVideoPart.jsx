import React, { useEffect, useRef } from "react";

export default function PlayVideoPart({ VideoID, title }) {
  const playVideoRef = useRef(null);

  useEffect(() => {
    const iframe = playVideoRef.current;
    if (!iframe) return;

    const handleLoad = () => {
      iframe.contentWindow.postMessage(
        '{"event":"command","func":"unMute","args":""}',
        "*"
      );
    };

    iframe.addEventListener("load", handleLoad);
    return () => iframe.removeEventListener("load", handleLoad);
  }, [VideoID]);

  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden select-none *:select-none">
      <iframe
        ref={playVideoRef}
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${VideoID}?autoplay=1&mute=1&rel=0`}
        title={title || "YouTube Shorts"}
        frameBorder="0"
        allow="autoplay; encrypted-media; fullscreen; picture-in-picture; Save video as"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
}
