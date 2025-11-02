/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../contexts/App/AppContext";
import FirstPartAndVideoPart from "../components/PlayVideoInterFaceComponent/FirstPartAndVideoPart";
import SecendPartAndReccomendPart from "../components/PlayVideoInterFaceComponent/SecendPartAndReccomendPart";
import { UiContext } from "../contexts/Ui/UiContext";
import { GetVideoData } from "../utils/GetVideoData";
import { GetChannelData } from "../utils/GetChannelData";
import { GetCommentThreads } from "../utils/GetCommentThreads";
import { GetRecommendWithVID } from "../utils/GetReccomendWithVID";

export default function PlayVideoInterFacePage() {
  const { apiKey } = useContext(AppContext);
  // Context
  const { HomePageWidth, HomePageHeight } = useContext(UiContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [VideoID, setVideoID] = useState("");
  const [VideoData, setVideoData] = useState({});
  const [ChannelData, setChannelData] = useState({});
  const [CommentData, setCommentData] = useState([]);
  const [CommentDataLoading, setCommentDataLoading] = useState(false);
  const [CommentNextToken, setCommentNextToken] = useState("");
  const [totalResults, setTotalResults] = useState(0);
  const [reccomendVideoItem, setReccomendVideoItem] = useState([]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const videoId = params.get("v");
    if (videoId === null) {
      navigate("/");
    } else {
      setVideoID(videoId);
      async function fetchData() {
        try {
          // VideoData
          let VdData = await GetVideoData(videoId, apiKey);
          setVideoData(VdData);

          // ChannelData;
          let CHData = await GetChannelData(VdData?.snippet?.channelId, apiKey);
          setChannelData(CHData);

          // commentThreads
          let commentThreads = await GetCommentThreads(VdData?.id, apiKey);
          setCommentData(commentThreads?.items);
          setCommentNextToken(commentThreads?.nextPageToken);
          setTotalResults(commentThreads?.pageInfo?.totalResults);

          // reccomendVideoItem
          let recVideoItem = await GetRecommendWithVID(videoId, apiKey);
          console.log(recVideoItem);
        } catch (err) {
          console.error("Fetch Data Error:" + err);
        }
      }
      fetchData();
    }
  }, []);

  async function moreCommentThreads() {
    try {
      // if (totalResults === CommentData.length) return;
      setCommentDataLoading(true);
      // commentThreads
      let commentThreads = await GetCommentThreads(VideoID, apiKey);
      setTimeout(() => {
        setCommentData((p) => [...p, ...commentThreads?.items]);
        setCommentNextToken(commentThreads?.nextPageToken);
        setCommentDataLoading(false);
      }, 1000);
    } catch (err) {
      console.error("Fetch Data Error:" + err);
    }
  }

  return (
    <div
      style={{
        // width
        minWidth: `${HomePageWidth}px`,
        width: `${HomePageWidth}px`,

        // height
        minHeight: `${HomePageHeight}px`,
        height: `${HomePageHeight}px`,
      }}
      className="flex flex-col md:flex-row gap-5 py-3 px-2 md:px-4 overflow-y-auto"
    >
      <FirstPartAndVideoPart
        VideoID={VideoID}
        VideoData={VideoData}
        ChannelData={ChannelData}
        CommentData={CommentData}
        moreCommentThreads={moreCommentThreads}
        CommentDataLoading={CommentDataLoading}
      />
      {/* <CommentInterface VideoID={VideoID} /> */}
      <SecendPartAndReccomendPart reccomendVideoItem={reccomendVideoItem} />
    </div>
  );
}
