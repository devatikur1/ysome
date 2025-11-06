/* eslint-disable react-hooks/exhaustive-deps */
/* --------- import Some Important Jinis --------- */
import React, { useContext, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useScroll } from "motion/react";
import { Timestamp } from "firebase/firestore";

/* --------- import Context --------- */
import { UiContext } from "../contexts/Ui/UiContext";

/* --------- import main Two Component --------- */
import FirstPartAndVideoPart from "../components/PlayVideoInterFaceComponent/FirstPartAndVideoPart";
import SecendPartAndReccomendPart from "../components/PlayVideoInterFaceComponent/SecendPartAndReccomendPart";

/* --------- import All Helper Funtion --------- */
import { GetVideoData } from "../utils/GetVideoData";
import { GetChannelData } from "../utils/GetChannelData";
import { GetVideoDetails } from "../utils/GetVideoDetails";
import { ParseMillified } from "../utils/ParseMillified";
import GetCommentThreads from "../utils/GetCommentThreads";
import { GetRelateVideos } from "../utils/GetRelateVideos";
import { GetRelatedVideosOnYt } from "../utils/GetRelatedVideosOnYt";

/* --------- import All api Keys --------- */
import {
  apiKey1,
  apiKey2,
  apiKey3,
  apiKey4,
  apiKey5,
  apiKey6,
  apiKey7,
  apiKey8,
} from "../utils/data";

export default function PlayVideoInterFacePage() {
  const { HomePageWidth, HomePageHeight } = useContext(UiContext);
  const location = useLocation();
  const navigate = useNavigate();

  // ------------------------------
  // 1️⃣ USE-STATES
  // ------------------------------
  const [VideoID, setVideoID] = useState("");
  const [loading, setLoading] = useState(true);

  const [VideoData, setVideoData] = useState({});
  const [ChannelData, setChannelData] = useState({});
  const [CommentData, setCommentData] = useState([]);
  const [CommentDataLoading, setCommentDataLoading] = useState(false);
  const [CommentNextToken, setCommentNextToken] = useState("");

  const [ReccomendVideoItem, setReccomendVideoItem] = useState([]);
  const [ReccomendYtNextToken, setReccomendYtNextToken] = useState("");
  const [ReccomendLoading, setReccomendLoading] = useState(false);

  const [IsVdDetails, setIsVdDetails] = useState(false);
  const [IsVdDetailsFetch, setIsVdDetailsFetch] = useState(false);
  const [videoDetails, setVideoDetails] = useState({});

  const [likeObject, setlikeObject] = useState({});
  const [setApiIndex] = useState(0);

  const containerRef = useRef(null);
  const scrollTriggeredRef = useRef(false);

  const apiKeys = [
    "AIzaSyAFhOQVeWB1W6L6-WBVyq-ZJdwuJMiunho",
    apiKey8,
    apiKey7,
    apiKey1,
    apiKey2,
    apiKey3,
    apiKey4,
    apiKey5,
    apiKey6,
  ];
  const [activeKey, setActiveKey] = useState(
    "AIzaSyC7UAG4RL1rMwGKr7pNB2RsF46pJUIFGcs"
  );

  // ------------------------------
  // 2️⃣ LOGIC HELPERS
  // ------------------------------
  const rotateApiKey = () => {
    setApiIndex((prev) => {
      const index = prev + 1 < apiKeys.length ? prev + 1 : 0;
      setActiveKey(apiKeys[index]);
      return index;
    });
  };

  const safeFetch = async (fn, args) => {
    try {
      return await fn(args);
    } catch (err) {
      console.error("⚠️ Fetch Error, Rotating Key...", err);
      rotateApiKey();
      return null;
    }
  };

  // ------------------------------
  // 3️⃣ FETCH VIDEO DETAILS
  // ------------------------------
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const videoId = params.get("v");

    if (!videoId) {
      navigate("/");
      return;
    }

    setVideoID(videoId);

    (async () => {
      setLoading(true);
      setReccomendLoading(true);

      const vdDetails = await GetVideoDetails({
        videoID: videoId,
        key: "6300721694msh8f42ed36c1e74d6p1d2b3ejsn5867222c6811",
      });

      if (!vdDetails) {
        setIsVdDetails(false);
        setVideoDetails({});
      } else {
        setVideoDetails(vdDetails);
        setIsVdDetails(true);
      }

      setIsVdDetailsFetch(true);
      setLoading(false);
    })();
  }, [location]);

  // ------------------------------
  // 4️⃣ FETCH ALL DATA
  // ------------------------------
  useEffect(() => {
    if (!IsVdDetailsFetch) return;

    const fetchAllData = async () => {
      let vdData = {};
      let chData = {};

      // ----- Case 1: Already have videoDetails -----
      if (IsVdDetails && videoDetails?.id) {
        const vd = videoDetails;

        vdData = {
          kind: "youtube#video",
          id: vd.id,
          snippet: {
            publishedAt: vd.publishedTime || vd.publishedTimeText,
            channelId: vd.channel?.id,
            title: vd.title,
            description: vd.description,
            thumbnails: vd.thumbnails,
            channelTitle: vd.channel?.name,
            liveBroadcastContent: vd.isLiveStream ? "live" : "none",
            localized: { title: vd.title, description: vd.description },
          },
          statistics: {
            viewCount: vd.viewCount,
            likeCount: vd.likeCount,
            commentCount: ParseMillified(vd.commentCountText),
          },
        };

        document.title = vd.title;
        setVideoData(vdData);
        setReccomendVideoItem(vd.related?.items || []);
        setReccomendYtNextToken(vd.related?.nextToken || "");
        setReccomendLoading(false);
      }
      // ----- Case 2: Need to fetch video manually -----
      else {
        console.log("aaa");

        vdData = await safeFetch(GetVideoData, VideoID, activeKey);
        if (vdData) {
          document.title = vdData.snippet?.title || "YouTube Clone";
          setVideoData(vdData);
        }

        const relatedVideo = await GetRelatedVideosOnYt({
          videoId: VideoID,
          pageToken: "",
          key: activeKey,
        });
        console.log(relatedVideo);

        if (relatedVideo) {
          setReccomendVideoItem((prev) => [...prev, ...relatedVideo.items]);
          setReccomendYtNextToken(relatedVideo.nextToken);
        }
        setReccomendLoading(false);
      }

      // ----- Channel Data -----
      if (vdData?.snippet?.channelId) {
        chData = await safeFetch(GetChannelData, {
          channelId: vdData?.snippet?.channelId,
          key: activeKey,
        });
        if (chData) setChannelData(chData);
      }

      // ----- Comment Threads -----
      setCommentDataLoading(true);
      const commentThreads = await safeFetch(GetCommentThreads, {
        videoId: VideoID,
        key: activeKey,
        pageToken: null,
      });

      if (commentThreads) {
        setCommentData(commentThreads.items || []);
        setCommentNextToken(commentThreads.nextPageToken || "");
        setIsVdDetailsFetch(false);
      }
      setCommentDataLoading(false);
    };

    fetchAllData();
  }, [videoDetails, IsVdDetailsFetch, activeKey]);

  // ------------------------------
  // 5️⃣ LIKE OBJECT
  // ------------------------------
  useEffect(() => {
    if (!ChannelData && !VideoData) return;
    const lkObj = {
      video: { ...VideoData },
      channel: { ...ChannelData },
      publishedAt: new Date().toISOString(),
      FirebasePublishedAt: Timestamp.now(),
    };
    setlikeObject(lkObj);
  }, [ChannelData, VideoData]);

  // ------------------------------
  // 6️⃣ LOAD MORE COMMENTS
  // ------------------------------
  const moreCommentThreads = async () => {
    if (!CommentNextToken || CommentDataLoading) return;
    setCommentDataLoading(true);

    const commentThreads = await safeFetch(GetCommentThreads, {
      videoId: VideoID,
      key: activeKey,
      pageToken: CommentNextToken,
    });

    if (commentThreads) {
      setCommentData((prev) => [...prev, ...commentThreads.items]);
      setCommentNextToken(commentThreads.nextPageToken);
    }
    setCommentDataLoading(false);
  };

  // --------------------------------------
  // 7️⃣ INFINITE SCROLL FOR RECOMMEND
  // --------------------------------------
  const { scrollYProgress } = useScroll({ container: containerRef });

  useEffect(() => {
    if (!scrollYProgress) return;

    const unsubscribe = scrollYProgress.on("change", async (value) => {
      if (
        value > 0.9 &&
        !ReccomendLoading &&
        ReccomendYtNextToken &&
        !scrollTriggeredRef.current
      ) {
        scrollTriggeredRef.current = true;
        setReccomendLoading(true);

        if (IsVdDetails) {
          const relatedVideo = await safeFetch(GetRelateVideos, {
            videoID: VideoID,
            nextPageNoken: ReccomendYtNextToken,
            key: activeKey,
          });

          if (relatedVideo) {
            setReccomendVideoItem((prev) => [...prev, ...relatedVideo.items]);
            setReccomendYtNextToken(relatedVideo.nextToken);
          }
        }

        scrollTriggeredRef.current = false;
        setReccomendLoading(false);
      }
    });

    return () => unsubscribe();
  }, [
    scrollYProgress,
    ReccomendYtNextToken,
    ReccomendLoading,
    VideoData,
    VideoID,
    activeKey,
  ]);

  // ------------------------------
  // 8️⃣ RENDER
  // ------------------------------
  return (
    <div
      ref={containerRef}
      style={{
        width: `${HomePageWidth}px`,
        height: `${HomePageHeight}px`,
        minWidth: `${HomePageWidth}px`,
        minHeight: `${HomePageHeight}px`,
      }}
      className="relative flex flex-col md:flex-row gap-5 py-3 px-2 md:px-4 overflow-x-hidden overflow-y-auto"
    >
      <FirstPartAndVideoPart
        VideoID={VideoID}
        VideoData={VideoData}
        ChannelData={ChannelData}
        CommentData={CommentData}
        moreCommentThreads={moreCommentThreads}
        CommentDataLoading={CommentDataLoading}
        loading={loading}
        IsVdDetails={IsVdDetails}
        videoDetails={videoDetails}
        likeObject={likeObject}
      />
      <SecendPartAndReccomendPart
        ReccomendVideoItem={ReccomendVideoItem}
        ReccomendLoading={ReccomendLoading}
      />
    </div>
  );
}
