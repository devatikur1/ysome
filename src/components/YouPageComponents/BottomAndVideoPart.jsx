import React from "react";
import HistoryComponent from "./VideoPart/HistoryComponent";
import LikedComponent from "./VideoPart/LikedComponent";

export default function BottomAndVideoPart({ countData, gridCols }) {
  return (
    <div className="p-5 pt-9 flex flex-col gap-8">
      <HistoryComponent gridCols={gridCols} countData={countData} />
      <LikedComponent gridCols={gridCols} countData={countData} />
    </div>
  );
}
