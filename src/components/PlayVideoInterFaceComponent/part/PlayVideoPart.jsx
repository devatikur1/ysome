import React, { useEffect, useRef } from "react";

export default function PlayVideoPart({ VideoID, title }) {
  const playVideoRef = useRef(null);
  useEffect(() => {
    if (playVideoRef.current) {
      const timer = setTimeout(() => {
        playVideoRef.current.contentWindow.postMessage(
          '{"event":"command","func":"unMute","args":""}',
          "*"
        );
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [VideoID, playVideoRef]);
  return (
    <iframe
      ref={playVideoRef}
      width="100%"
      height="100%"
      src={`https://www.youtube.com/embed/${VideoID}?autoplay=1&mute=1&rel=0`}
      title={title || "YouTube Shorts"}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      className="rounded-2xl"
    ></iframe>
  );
}
