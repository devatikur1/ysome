import React, { useEffect, useState } from "react";
import moment from "moment";
import { RelatedSkeleton } from "../custom/LoadingComponent";
import LikedVideoPart from "./part/LikedVideoPart";

export default function AllLikedVideoCom({
  userAllLikedVdData,
  activeOptionName,
  DeleteLike,
  LikeLoding,
  gridCols,
}) {
  const [subsData, setsubData] = useState([]);

  useEffect(() => {
    switch (activeOptionName) {
      // 🔹 0 = Latest
      case 0: {
        const latestData = userAllLikedVdData.map((su) => {
          const publishedAt = su.publishedAt;
          const now = moment();
          const posted = moment(publishedAt);
          const formattedDate = now.diff(posted, "days", true);
          return { ...su, pt: formattedDate };
        });
        let ld = latestData.sort((a, b) => a.pt - b.pt);
        setsubData(ld);
        break;
      }

      // 🔹 1 = Oldest
      case 1: {
        const oldestData = userAllLikedVdData.map((su) => {
          const publishedAt = su.publishedAt;
          const now = moment();
          const posted = moment(publishedAt);
          const formattedDate = now.diff(posted, "days", true);
          return { ...su, pt: formattedDate };
        });
        let od = oldestData.sort((a, b) => b.pt - a.pt);
        setsubData(od);
        break;
      }

      // 🔹 2 = A-Z Sort
      case 2: {
        const sortedAZ = [...userAllLikedVdData].sort((a, b) =>
          a.data?.snippet?.title?.localeCompare(b.data?.snippet?.title)
        );
        setsubData(sortedAZ);
        break;
      }

      default:
        break;
    }
  }, [activeOptionName, userAllLikedVdData]);

  return (
    <>
      <section
        className={`"w-full grid gap-5 pb-5 border-t border-border pt-5" ${gridCols}`}
      >
        {subsData.map((item, id) => (
          <LikedVideoPart key={id} item={item?.data} />
        ))}

        {LikeLoding && [...Array(5)].map((_, i) => <RelatedSkeleton key={i} />)}
      </section>

      {!LikeLoding && subsData.length === 0 && (
        <div className="w-full flex justify-center items-center">
          <p className=" text-subtext text-center py-32">
            No Like Video found...
          </p>
        </div>
      )}
    </>
  );
}
