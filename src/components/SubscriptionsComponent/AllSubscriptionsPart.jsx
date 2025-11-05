import React from "react";
import SubscriptionsPart from "./part/SubscriptionsPart";

export default function AllSubscriptionsPart({
  activeOptionName,
  subscriptions,
  UnSubscribe,
}) {
  console.log(subscriptions);

  return (
    <section className="w-full flex flex-col gap-6">
      {subscriptions.map((channel, i) => (
        <SubscriptionsPart
          key={i}
          cid={channel?.id}
          channel={channel?.data}
          UnSubscribe={UnSubscribe}
        />
      ))}
      {subscriptions.length === 0 && (
        <p className="text-subtext text-center py-32">
          No subscriptions found...
        </p>
      )}
    </section>
  );
}
