/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../contexts/App/AppContext";
import FirstPartAndVideoPart from "../components/PlayVideoInterFaceComponent/FirstPartAndVideoPart";
import SecendPartAndReccomendPart from "../components/PlayVideoInterFaceComponent/SecendPartAndReccomendPart";
import { UiContext } from "../contexts/Ui/UiContext";
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
  const [VideoID, setVideoID] = useState("");
  const [loading, setLoading] = useState(true);

  // ChannelData && Video Data && commentThreads
  const [VideoData, setVideoData] = useState({});
  const [ChannelData, setChannelData] = useState({});
  const [CommentData, setCommentData] = useState([]);

  // commentThreads state
  const [CommentDataLoading, setCommentDataLoading] = useState(false);
  const [CurrentResultsPageNum, setCurrentResultsPageNum] = useState(0);
  const [totalResults, setTotalResults] = useState(0);
  const [CommentNextToken, setCommentNextToken] = useState("");

  // Reccomend Video Item state
  const [reccomendVideoItem, setReccomendVideoItem] = useState([]);
  const [ReccomendNextToken, setReccomendNextToken] = useState([]);

  // IsVdDetails
  const [IsVdDetails, setIsVdDetails] = useState(false);
  const [ReccomendLoading, setReccomendLoading] = useState(false);
  const [IsVdDetailsFetch, setIsVdDetailsFetch] = useState(false);
  const [videoDetails, setVideoDetails] = useState({});

  // containerRef
  const containerRef = useRef(null);
  const scrollTriggeredRef = useRef(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const videoId = params.get("v");

    if (!videoId) {
      navigate("/");
      return;
    }

    setVideoID(videoId);

    const fetchData = async () => {
      setLoading(true);
      try {
        // const vdDetails = await GetVideoDetails({
        //   videoID: videoId,
        //   key: "a75980a9fbmshfec67340042b102p10aefcjsn12c3ebc9e89c",
        // });

        // const vdDetails = JSON.parse(localStorage.getItem("VdD"));
        const vdDetails = undefined;

        if (!vdDetails) {
          console.error("Video details not found!");
          setVideoDetails({});
          setIsVdDetails(false);
          setIsVdDetailsFetch(true);
          return;
        }

        console.log("Video Details:", vdDetails); // Debug purpose
        setVideoDetails(vdDetails);
        setIsVdDetails(true);
        setIsVdDetailsFetch(true);
      } catch (err) {
        console.error("Fetch Data Error:", err);
      }
    };

    fetchData();
  }, [location]);

  useEffect(() => {
    if (IsVdDetailsFetch === false) return;
    async function ShereData() {
      let videoId = VideoID;
      if (IsVdDetails) {
        console.log(IsVdDetails);
        let vdDetails = videoDetails;
        setReccomendLoading(true);
        // Video Data
        const VdData = {
          kind: "youtube#video",
          id: vdDetails.id,
          snippet: {
            publishedAt: vdDetails.publishedTime || vdDetails.publishedTimeText,
            channelId: vdDetails.channel?.id,
            title: vdDetails.title,
            description: vdDetails.description,
            thumbnails: vdDetails.thumbnails,
            channelTitle: vdDetails.channel?.name,
            categoryId: "22",
            liveBroadcastContent: vdDetails.isLiveStream ? "live" : "none",
            localized: {
              title: vdDetails.title,
              description: vdDetails.description,
            },
          },
          statistics: {
            viewCount: vdDetails.viewCount,
            likeCount: vdDetails.likeCount,
            favoriteCount: "0",
            commentCount: ParseMillified(vdDetails.commentCountText),
          },
        };
        setVideoData(VdData);

        const CHData = {
          kind: "youtube#channel",
          etag: "zxZCko45_3OqYcrY1M5b3GySfrk",
          id: vdDetails.channel?.id,
          snippet: {
            title: vdDetails.channel?.name,
            customUrl: vdDetails.channel?.handle,
            thumbnails: {
              default: {
                url: vdDetails?.channel?.avatar[0].url,
                width: 88,
                height: 88,
              },
              medium: {
                url: vdDetails?.channel?.avatar[1].url,
                width: 240,
                height: 240,
              },
              high: {
                url: vdDetails?.channel?.avatar[2].url,
                width: 800,
                height: 800,
              },
            },
            localized: {
              title: vdDetails.channel?.name,
            },
          },
          statistics: {
            subscriberCount: ParseMillified(
              vdDetails.channel?.subscriberCountText?.split(" ")[0]
            ),
          },
        };
        setChannelData(CHData);
        setReccomendVideoItem(vdDetails?.related?.items);
        setReccomendNextToken({
          query: null,
          token: vdDetails?.related?.nextToken || null,
        });
      } else {
        console.log(false);

        // Fallback if vdDetails not found
        const VdData = await GetVideoData(
          videoId,
          apiKey
        );
        setVideoData(VdData);
        const CHData = await GetChannelData(
          VdData?.snippet?.channelId,
          apiKey
        );
        setChannelData(CHData);
        console.log(VdData);

        setReccomendLoading(true);

        // Recommended Videos
        let { newNextTokens, recVideoItem } = GetsetReccomendData({
          queries: VdData?.snippet?.tags,
          nxtPgTokens: ReccomendNextToken,
          apiKey: apiKey,
        });
        console.log( recVideoItem);

        setReccomendVideoItem(recVideoItem);
        setReccomendNextToken(newNextTokens);
      }

      setReccomendLoading(false);
      setLoading(false);
      setCommentDataLoading(true);

      // Comments
      const commentThreads = await GetCommentThreads({
        videoId,
        key: apiKey,
        pageToken: null,
      });
      console.log(commentThreads);
      setCommentData(commentThreads?.items || []);
      setCommentNextToken(commentThreads?.nextPageToken || "");
      setTotalResults(commentThreads?.pageInfo?.totalResults || 0);
      setCurrentResultsPageNum(1);
      setCommentDataLoading(false);
      setIsVdDetailsFetch(false);
    }

    // call ShereData funtion
    ShereData();
  }, [videoDetails, IsVdDetailsFetch, apiKey]);

  // more Comment Threads
  async function moreCommentThreads() {
    try {
      if (totalResults <= CurrentResultsPageNum && !CommentNextToken) return;
      setCommentDataLoading(true);

      // commentThreads
      let commentThreads = await GetCommentThreads({
        videoId: VideoID,
        key: apiKey,
        pageToken: CommentNextToken,
      });
      setTimeout(() => {
        if (commentThreads) {
          setCommentData((p) => [...p, ...commentThreads?.items]);
          setCommentNextToken(commentThreads?.nextPageToken);
          setCommentDataLoading(false);
          setCurrentResultsPageNum((p) => p + 1);
        }
      }, 1000);
    } catch (err) {
      console.error("Fetch Data Error:" + err);
    }
  }

  useEffect(() => {
    console.log(ChannelData);
    console.log(VideoData?.statistics?.commentCount);
  }, [ChannelData]);

  // ------------------------------
  // Scroll base get videos data
  // ------------------------------

  const { scrollYProgress } = useScroll({ container: containerRef });

  useEffect(() => {
    if (!scrollYProgress) return;

    const unsubscribe = scrollYProgress.on("change", (value) => {
      if (
        value > 0.9 &&
        !ReccomendLoading &&
        ReccomendNextToken &&
        !scrollTriggeredRef.current &&
        VideoData?.snippet?.title
      ) {
        scrollTriggeredRef.current = true;
        setReccomendLoading(true);
        async function fetchReccomendData({ nxtPgTokens }) {
          if (IsVdDetails === true) {
          } else {
            // Recommended Videos
            let { newNextTokens, recVideoItem } = GetsetReccomendData({
              queries: VideoData?.snippet?.tags,
              nxtPgTokens: ReccomendNextToken,
              apiKey: apiKey,
            });
            console.log({ newNextTokens, recVideoItem });

            setReccomendVideoItem((p) => [...p, ...recVideoItem]);
            setReccomendNextToken(newNextTokens);
          }
        }
        fetchReccomendData({
          nxtPgTokens: ReccomendNextToken,
        }).finally(() => {
          scrollTriggeredRef.current = false;
          setReccomendLoading(false);
        });
      }
    });

    return () => unsubscribe();
  }, [
    scrollYProgress,
    ReccomendLoading,
    ReccomendNextToken,
    IsVdDetails,
    VideoData,
  ]);

  return (
    <div
      ref={containerRef}
      style={{
        // width
        minWidth: `${HomePageWidth}px`,
        width: `${HomePageWidth}px`,

        // height
        minHeight: `${HomePageHeight}px`,
        height: `${HomePageHeight}px`,
      }}
      className="flex flex-col md:flex-row gap-5 py-3 px-2 md:px-4 overflow-x-hidden overflow-y-auto"
    >
      <>
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
      </>
    </div>
  );
}
