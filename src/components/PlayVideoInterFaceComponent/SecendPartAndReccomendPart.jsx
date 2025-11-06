import React from "react";
import ReccomendLoadingPart from "./part/Reccomend/ReccomendLoadingPart";
import ReccomendItemPart from "./part/Reccomend/ReccomendItemPart";

export default function SecendPartAndReccomendPart({ ReccomendVideoItem, ReccomendLoading }) {
  return (
    <section className="relative w-full md:w-1/3 md:h-full grid sm:grid-cols-2 md:grid-cols-1 2xl:grid-cols-2 gap-4">
      {/* When reccomendVideoItem Video Loading */}
      {ReccomendVideoItem?.map((item, idx) => (
        <ReccomendItemPart key={idx} item={item} />
      ))}

      {/* When Reccomend Video Loading */}
      {ReccomendLoading &&
        [...Array(23)].map((_, i) => <ReccomendLoadingPart key={i} />)}
    </section>
  );
}
