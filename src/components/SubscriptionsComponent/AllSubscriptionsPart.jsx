import React, { useEffect, useState } from "react";
import SubscriptionsPart from "./part/SubscriptionsPart";
import SubscriptionsLoding from "./part/SubscriptionsLoding";
import moment from "moment";

export default function AllSubscriptionsPart({
  activeOptionName,
  subscriptions,
  UnSubscribe,
  SubLoding,
}) {
  const [subsData, setsubData] = useState([]);

  useEffect(() => {
    switch (activeOptionName) {
      // 🔹 0 = Latest
      case 0: {
        const latestData = subscriptions.map((su) => {
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
        const oldestData = subscriptions.map((su) => {
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
        const sortedAZ = [...subscriptions].sort((a, b) =>
          a.data?.snippet?.title?.localeCompare(b.data?.snippet?.title)
        );
        setsubData(sortedAZ);
        break;
      }

      default:
        break;
    }
  }, [subscriptions, activeOptionName]);

  useEffect(() => {
    subsData.forEach((dt) => {
      console.log(dt.pt);
    });
  }, [subsData]);

  return (
    <section className="w-full flex flex-col gap-5 pb-5 border-t border-border pt-5">
      {subsData.map((channel, i) => (
        <>
          <SubscriptionsPart
            key={i}
            cid={channel?.id}
            channel={channel?.data}
            UnSubscribe={UnSubscribe}
      
          />
          {subsData.length !== i + 1 && (
            <hr className="border-none outline-none h-[1px] bg-border" />
          )}
        </>
      ))}

      {SubLoding &&
        [...Array(5)].map((_, i) => <SubscriptionsLoding key={i} />)}

      {!SubLoding && subsData.length === 0 && (
        <p className="text-subtext text-center py-32">
          No subscriptions found...
        </p>
      )}
    </section>
  );
}
