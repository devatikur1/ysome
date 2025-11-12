/* eslint-disable react-hooks/exhaustive-deps */
/* --------- import Some Important Jinis --------- */
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useScroll } from "motion/react";

/* --------- import Context --------- */
import { UiContext } from "../contexts/Ui/UiContext";

/* --------- import main Component --------- */

import ChannelAndLike from "../components/PlayVideoInterFaceComponent/ChannelAndLike";
import PlayerVideo from "../components/PlayVideoInterFaceComponent/part/Video/PlayerVideo";
import CommoentInterFace from "../components/PlayVideoInterFaceComponent/part/CommoentInterFace";

import ReccomendPart from "../components/PlayVideoInterFaceComponent/ReccomendPart";

/* --------- import All Helper Funtion --------- */
import { GetVideoDetails } from "../utils/GetVideoDetails";
import { GetChannelData } from "../utils/GetChannelData";
import GetCommentThreads from "../utils/GetCommentThreads";
import { GetRelateVideos } from "../utils/GetRelateVideos";
import { ParseMillified } from "../utils/ParseMillified";

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

import ErrorPage from "../components/custom/ErrorPage";

/* --------- import Important Loading Part  --------- */
import {
  CommentSkeleton,
  RelatedSkeleton,
  VideoHeaderSkeleton,
  VideoSkeleton,
} from "../components/custom/LoadingComponent";
import { FirebaseContext } from "../contexts/Firebase/FirebaseContext";

export default function PlayVideoInterFacePage() {
  const { HomePageOutletWidth, HomePageHeight } = useContext(UiContext);
  const { his } = useContext(FirebaseContext);
  const location = useLocation();
  const navigate = useNavigate();

  let { AddHistory } = his;

  // ------------------------------
  // 1️⃣ USE-STATES
  // ------------------------------
  const [VideoID, setVideoID] = useState("");

  /* 🔹 All Data Sate */
  const [VideoData, setVideoData] = useState({});
  const [videoDetails, setVideoDetails] = useState({});
  const [CommentData, setCommentData] = useState([]);
  const [RelatedVideoItem, setRelatedVideoItem] = useState([]);

  /* 🔹 All Token Sate */
  const [CommentNextToken, setCommentNextToken] = useState("");
  const [RelatedVideoToken, setRelatedVideoToken] = useState("");

  /* 🔹 All Loading Sate */
  const [loading, setLoading] = useState(true);
  const [CommentDataLoading, setCommentDataLoading] = useState(false);
  const [RelatedVideoLoading, setRelatedVideoLoading] = useState(false);

  /* 🔹 All Ref */
  const containerRef = useRef(null);
  const scrollTriggeredRef = useRef(false);

  /* 🔹 Error And Api Sate */
  const [isError, setError] = useState(false);
  const apiKeys = [
    apiKey1,  
    apiKey2,
    apiKey3,
    apiKey4,
    apiKey5,
    apiKey6,
    apiKey7,
    apiKey8,
  ];
  const [apiIndex, setApiIndex] = useState(0);
  const [activeKey, setActiveKey] = useState(apiKeys[0]);

  // ------------------------------
  // 2️⃣ LOGIC HELPERS
  // ------------------------------
  const rotateApiKey = () => {
    const index = apiIndex + 1 < apiKeys.length ? apiIndex + 1 : 0;
    setActiveKey(apiKeys[index]);
    setApiIndex(index);
    return apiKeys[index];
  };

  const safeFetch = async ({ fn, args }) => {
    const data = await fn(args);
    if (!data || data === null) {
      const nextKey = rotateApiKey();
      console.warn("🔁 API key rotated:", nextKey);
      return await fn({ ...args, key: nextKey });
    }
    return data;
  };

  // ------------------------------
  // 3️⃣ FETCH VIDEO DETAILS
  // ------------------------------

  async function CallFirstData(id) {
    setLoading(true);
    setRelatedVideoLoading(true);

    const { status, data } = await GetVideoDetails({
      videoID: id,
      key: process.env.REACT_APP_VIDEO_DETAILS_FN_KEY,
    });
    console.log(status);

    if (status === false) {
      setError(true);
      setVideoDetails({});
    } else {
      setError(false);
      setVideoDetails(data);
      let [videoData, VdDetails, cmtData, RelatedVideo] = await fetchAllData({
        videoDetails: data,
      });
      await AddHistory({ vdId: videoData?.id, Edata: videoData });
      document.title = `${videoData?.snippet?.title}`;

      console.log(cmtData?.items);
      console.log(videoData);

      setVideoData(videoData);
      setVideoDetails(VdDetails);
      setCommentData(cmtData?.items);
      setRelatedVideoItem(RelatedVideo?.items);

      setCommentNextToken(cmtData?.nextPageToken);
      setRelatedVideoToken(RelatedVideo?.nextToken);
    }

    setLoading(false);
    setRelatedVideoLoading(false);
  }

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const videoId = params.get("v");

    if (!videoId) {
      navigate("/");
      return;
    }

    setVideoID(videoId);
    CallFirstData(videoId);
  }, [location, navigate]);

  // ------------------------------
  // 4️⃣ FETCH ALL DATA
  // ------------------------------

  const fetchAllData = useCallback(
    async ({ videoDetails }) => {
      if (!videoDetails) return;

      const vd = videoDetails;
      try {
        // --- Step 1: Channel Data && Video Data -----
        const chData = await safeFetch({
          fn: GetChannelData,
          args: {
            channelId: vd?.channel?.id,
            key: activeKey,
          },
        });

        const videoData = {
          kind: "youtube#video",
          id: vd?.id,
          snippet: {
            publishedAt: vd?.publishedTime,
            publishedTimeText: vd?.publishedTimeText,
            isCommentDisabled: vd?.isCommentDisabled,
            channelId: vd?.channel?.id,
            title: vd?.title,
            description: vd?.description,
            thumbnails: vd?.thumbnails,
            channelTitle: vd?.channel?.name,
            liveBroadcastContent: vd?.isLiveStream ? "live" : "none",
            localized: { title: vd?.title, description: vd?.description },
          },
          channel: {
            ...chData,
          },
          statistics: {
            viewCount: vd?.viewCount,
            likeCount: vd?.likeCount,
            commentCount: ParseMillified(vd?.commentCountText),
          },
        };

        // --- Step 2: Video Link Data -----
        const VdDetails = {
          video: { ...vd?.videos },
          audios: { ...vd?.audios },
          subtitles: { ...vd?.subtitles },
          thumbnails: { ...vd?.thumbnails },
        };

        // --- Step 3: Comment Threads -----
        const cmtData = await safeFetch({
          fn: GetCommentThreads,
          args: { videoId: vd?.id, key: activeKey, pageToken: null },
        });

        // --- Step 4: related videos -----
        const RelatedVideo = vd?.related;

        return [videoData, VdDetails, cmtData, RelatedVideo];
      } catch (error) {
        console.error("🔥 fetchAllData error:", error);
        return [];
      }
    },
    [activeKey, safeFetch]
  );

  // ------------------------------
  // 6️⃣ LOAD MORE COMMENTS
  // ------------------------------
  const moreCommentThreads = async () => {
    if (!CommentNextToken || !CommentDataLoading) return;
    setCommentDataLoading(true);

    const commentThreads = await safeFetch(GetCommentThreads, {
      videoId: VideoID,
      key: activeKey,
      pageToken: CommentNextToken,
    });

    if (commentThreads.items) {
      setCommentData((prev) => [...prev, ...commentThreads.items]);
      setCommentNextToken(commentThreads.nextPageToken);
    }
    setCommentDataLoading(false);
  };

  // --------------------------------------
  // 7️⃣ INFINITE SCROLL FOR RECOMMEND
  // --------------------------------------
  const { scrollYProgress } = useScroll({ container: containerRef });

  const handleScrollChange = useCallback(
    async (value) => {
      console.log(scrollTriggeredRef.current);

      if (
        value > 0.9 &&
        !RelatedVideoLoading &&
        RelatedVideoToken &&
        !scrollTriggeredRef.current
      ) {
        scrollTriggeredRef.current = true;
        setRelatedVideoLoading(true);

        try {
          if (!isError) {
            const { status, data } = await GetRelateVideos({
              videoID: VideoID,
              nextPageToken: RelatedVideoToken,
            });

            if (status && data?.items?.length) {
              setRelatedVideoItem((prev) => [...prev, ...data.items]);
              setRelatedVideoToken(data.nextToken);
            }
          }
        } catch (error) {
          console.error("Infinite scroll fetch failed:", error);
        } finally {
          scrollTriggeredRef.current = false;
          setRelatedVideoLoading(false);
        }
      }
    },
    [RelatedVideoLoading, RelatedVideoToken, isError, VideoID]
  );

  useEffect(() => {
    if (!scrollYProgress) return;
    const unsubscribe = scrollYProgress.on("change", handleScrollChange);
    return () => unsubscribe?.();
  }, [scrollYProgress, handleScrollChange]);

  // ------------------------------
  // 8️⃣ RENDER
  // ------------------------------
  return (
    <div
      style={{
        width: `${HomePageOutletWidth}px`,
        height: `${HomePageHeight}px`,
        minWidth: `${HomePageOutletWidth}px`,
        minHeight: `${HomePageHeight}px`,
      }}
      ref={containerRef}
      className=" overflow-x-hidden overflow-y-auto"
    >
      {loading ? (
        <div className="w-full flex flex-col md:flex-row gap-5 py-3 md:px-4 *:select-none">
          <section
            className={`flex flex-col w-[100%] md:w-[67%] h-auto pl-2 md:px-0`}
          >
            <article className="w-full min-h-[200px] sm:min-h-[305px] md:min-h-[300px] lg:min-h-[355px] xl:min-h-[700px]">
              <VideoSkeleton />
            </article>
            <VideoHeaderSkeleton />
            <article className="w-full">
              <article className="w-full py-5 pl-5 select-none cursor-pointer pt-12 pb-5">
                <h1 className="text-xl font-semibold flex items-center gap-3">
                  <div className="w-8 h-5 bg-surface rounded"></div>{" "}
                  <span>Comments</span>
                </h1>
              </article>
              <CommentSkeleton count={10} />
            </article>
          </section>

          <section
            className={`w-[100%] md:w-[33%] md:h-full grid sm:grid-cols-2 md:grid-cols-1 2xl:grid-cols-2 gap-4 px-2 md:px-0 pb-2 *:select-none`}
          >
            {RelatedVideoLoading &&
              [...Array(15)].map((_, i) => <RelatedSkeleton key={i} />)}
          </section>
        </div>
      ) : (
        <div className="w-full h-full flex flex-col md:flex-row gap-5 py-3 md:px-4">
          {isError ? (
            <ErrorPage
              style={{
                width: `${HomePageOutletWidth}px`,
                height: `${HomePageHeight}px`,
                minWidth: `${HomePageOutletWidth}px`,
                minHeight: `${HomePageHeight}px`,
              }}
              fetchData={() => CallFirstData(VideoID)}
            />
          ) : (
            <>
              <section
                className={`w-[100%] md:w-[67%] flex flex-col h-auto pl-2 md:px-0`}
              >
                <article className="w-full min-h-[200px] sm:min-h-[305px] md:min-h-[300px] lg:min-h-[355px] xl:min-h-[700px]">
                  <PlayerVideo videoDetails={videoDetails} />
                </article>
                <ChannelAndLike VideoID={VideoID} VideoData={VideoData} />
                <article className="w-full">
                  <CommoentInterFace
                    VideoID={VideoID}
                    CommentData={CommentData}
                    commentCount={VideoData?.statistics?.commentCount}
                    moreCommentThreads={moreCommentThreads}
                    CommentDataLoading={CommentDataLoading}
                  />
                </article>
              </section>

              <section
                className={`w-[100%] md:w-[33%] md:h-full grid sm:grid-cols-2 md:grid-cols-1 2xl:grid-cols-2 gap-4 px-2 md:px-0 pb-2 *:select-none`}
              >
                {RelatedVideoItem?.map((item, idx) => (
                  <ReccomendPart key={idx} item={item} />
                ))}
                {RelatedVideoLoading &&
                  [...Array(15)].map((_, i) => <RelatedSkeleton key={i} />)}
              </section>
            </>
          )}
        </div>
      )}
    </div>
  );
}
