/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../contexts/App/AppContext";
import FirstPartAndVideoPart from "../components/PlayVideoInterFaceComponent/FirstPartAndVideoPart";
import SecendPartAndReccomendPart from "../components/PlayVideoInterFaceComponent/SecendPartAndReccomendPart";
import { UiContext } from "../contexts/Ui/UiContext";

export default function PlayVideoInterFacePage() {
  const { apiKey } = useContext(AppContext);
  // Context
  const { HomePageOutletWidth, HomePageHeight } =
    useContext(UiContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [VideoID, setVideoID] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const videoId = params.get("v");
    if (videoId === null) {
      navigate("/");
    } else {
      setVideoID(videoId);
    }
  }, []);

  return (
    <div
      style={{
        // width
        minWidth: `${HomePageOutletWidth}px`,
        width: `${HomePageOutletWidth}px`,

        // height
        minHeight: `${HomePageHeight}px`,
        height: `${HomePageHeight}px`,
        overflowY: "auto",
      }}
      className="flex flex-col md:flex-row gap-5"
    >
      <div className="py-3 px-4">
        <FirstPartAndVideoPart VideoID={VideoID} />
        <SecendPartAndReccomendPart />
      </div>
    </div>
  );
}
