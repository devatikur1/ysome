/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../contexts/App/AppContext";
import FirstPartAndVideoPart from "../components/PlayVideoInterFaceComponent/FirstPartAndVideoPart";

export default function PlayVideoInterFacePage() {
  const { apiKey } = useContext(AppContext);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const videoId = params.get("v");
    if (videoId === null) {
      navigate("/");
    } else {
      
      }
  }, []);

  return (
    <div className="px-5 py-8">
      <FirstPartAndVideoPart />
    </div>
  );
}
