import React from "react";
import SubscriptionsPart from "./part/SubscriptionsPart";
import SubscriptionsLoding from "./part/SubscriptionsLoding";

export default function AllSubscriptionsPart({
  activeOptionName,
  subscriptions,
  UnSubscribe,
  SubLoding,
}) {
  return (
    <section className="w-full flex flex-col gap-6">
      {subscriptions.map((channel) => [
        [...Array(30)].map((_, i) => (
          <SubscriptionsPart
            key={i}
            cid={channel?.id}
            channel={channel?.data}
            UnSubscribe={UnSubscribe}
          />
        )),
      ])}
      {SubLoding &&
        [...Array(5)].map((_, i) => <SubscriptionsLoding key={i} />)}
      {!SubLoding && subscriptions.length === 0 && (
        <p className="text-subtext text-center py-32">
          No subscriptions found...
        </p>
      )}
    </section>
  );
}
