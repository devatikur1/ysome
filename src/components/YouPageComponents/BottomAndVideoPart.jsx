import React from "react";
import HistoryComponent from "./VideoPart/HistoryComponent";
import LikedComponent from "./VideoPart/LikedComponent";

export default function BottomAndVideoPart({ countData }) {
  return (
    <div className="p-5 pt-9">
      <HistoryComponent countData={countData} />
      <LikedComponent countData={countData} />
    </div>
  );
}
