// const vdData = {
//   kind: "youtube#video",
//   id: vd.id,
//   snippet: {
//     publishedAt: vd.publishedTime || vd.publishedTimeText,
//     channelId: vd.channel?.id,
//     title: vd.title,
//     description: vd.description,
//     thumbnails: vd.thumbnails,
//     channelTitle: vd.channel?.name,
//     liveBroadcastContent: vd.isLiveStream ? "live" : "none",
//     localized: { title: vd.title, description: vd.description },
//   },
//   statistics: {
//     viewCount: vd.viewCount,
//     likeCount: vd.likeCount,
//     commentCount: ParseMillified(vd.commentCountText),
//   },
// };

// document.title = vd.title;
// setVideoData(vdData);
// setReccomendVideoItem(vd.related?.items || []);
// setReccomendYtNextToken(vd.related?.nextToken || "");

// // ----- Channel Data -----
// if (vdData?.snippet?.channelId) {
//   const chData = await safeFetch(GetChannelData, {
//     channelId: vdData?.snippet?.channelId,
//     key: activeKey,
//   });
//   if (chData) setChannelData(chData);
// }

// // ----- Comment Threads -----
// setCommentDataLoading(true);
// const commentThreads = await safeFetch(GetCommentThreads, {
//   videoId: VideoID,
//   key: activeKey,
//   pageToken: null,
// });

// if (commentThreads) {
//   setCommentData(commentThreads.items || []);
//   setCommentNextToken(commentThreads.nextPageToken || "");
//   setIsVdDetailsFetch(false);
// }
