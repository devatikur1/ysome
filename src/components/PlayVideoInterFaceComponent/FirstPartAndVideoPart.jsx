import React, { useEffect, useRef, useState } from "react";
import FirstPartLoading from "./part/part/FirstPartLoading";
import FirstPartOutPart from "./part/part/FirstPartOutPart";

export default function FirstPartAndVideoPart(props) {

  const videoPartRef = useRef(null);
  const [VideoWidth, setVideoWidth] = useState();

  useEffect(() => {
    setVideoWidth(videoPartRef.current.offsetWidth);
  }, [videoPartRef]);

  return (
    <section
      ref={videoPartRef}
      className="relative w-[100%] md:w-[69%] md:h-full flex flex-col gap-6"
    >
      {props.loading ? (
        <FirstPartLoading />
      ) : (
        <FirstPartOutPart prop={props} VideoWidt={VideoWidth} />
      )}
    </section>
  );
}
