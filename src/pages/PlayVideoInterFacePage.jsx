/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../contexts/App/AppContext";
import { UiContext } from "../contexts/Ui/UiContext";
import FirstPartAndVideoPart from "../components/PlayVideoInterFaceComponent/FirstPartAndVideoPart";
import SecendPartAndReccomendPart from "../components/PlayVideoInterFaceComponent/SecendPartAndReccomendPart";

import { GetVideoData } from "../utils/GetVideoData";
import { GetChannelData } from "../utils/GetChannelData";
import { GetVideoDetails } from "../utils/GetVideoDetails";
import { ParseMillified } from "../utils/ParseMillified";
import GetCommentThreads from "../utils/GetCommentThreads";
import { useScroll } from "motion/react";
import { GetsetReccomendData } from "../utils/GetsetReccomendData";

export default function PlayVideoInterFacePage() {
  const { apiKey } = useContext(AppContext);
  // Context
  const { HomePageWidth, HomePageHeight } = useContext(UiContext);
  const location = useLocation();
  const navigate = useNavigate();

  // Custom
  const [VideoID, setVideoID] = useState("");
  const [loading, setLoading] = useState(true);

  // ChannelData && Video Data && commentThreads
  const [VideoData, setVideoData] = useState({});
  const [ChannelData, setChannelData] = useState({});
  const [CommentData, setCommentData] = useState([]);

  // commentThreads state
  const [CommentDataLoading, setCommentDataLoading] = useState(false);
  const [CommentNextToken, setCommentNextToken] = useState("");

  // Reccomend Video Item state
  const [reccomendVideoItem, setReccomendVideoItem] = useState([]);
  const [ReccomendYt_1NextToken, setReccomendYt_1NextToken] = useState("");
  const [ReccomendYt_2NextToken, setReccomendYt_2NextToken] = useState([]);

  // IsVdDetails
  const [IsVdDetails, setIsVdDetails] = useState(false);
  const [ReccomendLoading, setReccomendLoading] = useState(false);
  const [IsVdDetailsFetch, setIsVdDetailsFetch] = useState(false);
  const [videoDetails, setVideoDetails] = useState({});

  // Ref
  const containerRef = useRef(null);
  const scrollTriggeredRef = useRef(false);

  // ------------------------
  // Fetch Video Details
  // ------------------------
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
      try {
        // const vdDetails = await GetVideoDetails({
        //   videoID: videoId,
        //   key: "a75980a9fbmshfec67340042b102p10aefcjsn12c3ebc9e89c",
        // });
        // console.log(vdDetails);

        // const vdDetails = JSON.parse(localStorage.getItem("VdD"));
        const vdDetails = undefined;
        if (!vdDetails) {
          console.error("Video details not found!");
          setVideoDetails({});
          setIsVdDetails(false);
        } else {
          setVideoDetails(vdDetails);
          setIsVdDetails(true);
        }
      } catch (err) {
        console.error("Fetch Data Error:", err);
      } finally {
        setIsVdDetailsFetch(true);
        setLoading(false);
      }
    })();
  }, [location]);

  // ----------------------------------------------------
  // Fetch Video + Channel + Comments + Recommendations
  // ----------------------------------------------------

  useEffect(() => {
    if (!IsVdDetailsFetch) return;

    const fetchAllData = async () => {
      let vdData, chData;

      if (IsVdDetails && videoDetails?.id) {
        const vd = videoDetails;

        // vdData modify
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
            localized: {
              title: vd.title,
              description: vd.description,
            },
          },
          statistics: {
            viewCount: vd.viewCount,
            likeCount: vd.likeCount,
            commentCount: ParseMillified(vd.commentCountText),
          },
        };

        // chData modify
        chData = {
          kind: "youtube#channel",
          id: vd.channel?.id,
          snippet: {
            title: vd.channel?.name,
            customUrl: vd.channel?.handle,
            thumbnails: {
              default: { url: vd.channel?.avatar[0]?.url },
              medium: { url: vd.channel?.avatar[1]?.url },
              high: { url: vd.channel?.avatar[2]?.url },
            },
          },
          statistics: {
            subscriberCount: ParseMillified(
              vd.channel?.subscriberCountText?.split(" ")[0]
            ),
          },
        };

        // set many Data
        setVideoData(vdData);
        setChannelData(chData);
        setReccomendVideoItem(vd.related?.items || []);
        setReccomendYt_1NextToken(vd.related?.nextToken || "");
      } else {
        // if videoDetails not available
        vdData = await GetVideoData(
          VideoID,
          "AIzaSyBiTEOBIXZrKisPp01BMzAo9acbX0JpYt8"
        );
        chData = await GetChannelData(
          vdData?.snippet?.channelId,
          "AIzaSyBiTEOBIXZrKisPp01BMzAo9acbX0JpYt8"
        );
        setVideoData(vdData);
        setChannelData(chData);
        console.log(vdData);
        console.log(chData);

        const { newNextTokens, recVideoItem } = await GetsetReccomendData({
          queries: vdData?.snippet?.tags,
          nxtPgTokens: ReccomendYt_2NextToken,
          apiKey: "AIzaSyBiTEOBIXZrKisPp01BMzAo9acbX0JpYt8", // "AIzaSyBiTEOBIXZrKisPp01BMzAo9acbX0JpYt8"
        });
        console.log(newNextTokens);
        console.log("recVideoItem");
        console.log(recVideoItem);

        setReccomendVideoItem(recVideoItem);
        setReccomendYt_2NextToken(newNextTokens);
      }

      setReccomendLoading(false);
      setCommentDataLoading(true);

      // Fetch Comments
      try {
        const commentThreads = await GetCommentThreads({
          videoId: VideoID,
          key: apiKey,
          pageToken: null,
        });

        setCommentData(commentThreads?.items || []);
        setCommentNextToken(commentThreads?.nextPageToken || "");
      } catch (err) {
        console.error("Comment Fetch Error:", err);
      } finally {
        setCommentDataLoading(false);
        setIsVdDetailsFetch(false);
      }
    };

    fetchAllData();
  }, [videoDetails, IsVdDetailsFetch, apiKey]);

  // ------------------------
  // Load More Comments
  // ------------------------

  const moreCommentThreads = async () => {
    if (!CommentNextToken || CommentDataLoading) return;

    try {
      setCommentDataLoading(true);
      const commentThreads = await GetCommentThreads({
        videoId: VideoID,
        key: apiKey,
        pageToken: CommentNextToken,
      });

      if (commentThreads) {
        setCommentData((prev) => [...prev, ...commentThreads.items]);
        setCommentNextToken(commentThreads.nextPageToken);
      }
    } catch (err) {
      console.error("More Comments Error:", err);
    } finally {
      setCommentDataLoading(false);
    }
  };

  // ------------------------
  // Infinite Scroll: Load More Recommendations
  // ------------------------
  const { scrollYProgress } = useScroll({ container: containerRef });

  useEffect(() => {
    if (!scrollYProgress) return;

    const unsubscribe = scrollYProgress.on("change", async (value) => {
      if (
        value > 0.9 &&
        !ReccomendLoading &&
        (ReccomendYt_2NextToken || ReccomendYt_1NextToken) &&
        !scrollTriggeredRef.current
      ) {
        scrollTriggeredRef.current = true;
        setReccomendLoading(true);

        try {
          const { newNextTokens, recVideoItem } = await GetsetReccomendData({
            queries: VideoData?.snippet?.tags,
            nxtPgTokens: ReccomendYt_2NextToken,
            apiKey,
          });

          setReccomendVideoItem((prev) => [...prev, ...recVideoItem]);
          setReccomendYt_2NextToken(newNextTokens);
        } catch (err) {
          console.error("Scroll Load Error:", err);
        } finally {
          scrollTriggeredRef.current = false;
          setReccomendLoading(false);
        }
      }
    });

    return () => unsubscribe();
  }, [
    scrollYProgress,
    ReccomendYt_2NextToken,
    ReccomendYt_1NextToken,
    ReccomendLoading,
    VideoData,
  ]);

  // ------------------------
  // JSX Render
  // ------------------------
  return (
    <div
      ref={containerRef}
      style={{
        width: `${HomePageWidth}px`,
        height: `${HomePageHeight}px`,
        minWidth: `${HomePageWidth}px`,
        minHeight: `${HomePageHeight}px`,
      }}
      className="flex flex-col md:flex-row gap-5 py-3 px-2 md:px-4 overflow-x-hidden overflow-y-auto"
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
      />
      <SecendPartAndReccomendPart
        reccomendVideoItem={reccomendVideoItem}
        ReccomendLoading={ReccomendLoading}
      />
    </div>
  );
}
