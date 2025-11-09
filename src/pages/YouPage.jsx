import React, { useContext } from "react";
import { UiContext } from "../contexts/Ui/UiContext";

export default function YouPage() {
  const { HomePageOutletWidth, HomePageHeight } = useContext(UiContext);
  return (
    <div
      style={{
        // width
        maxWidth: `${HomePageOutletWidth}px`,
        minWidth: `${HomePageOutletWidth}px`,
        width: `${HomePageOutletWidth}px`,

        // height
        maxHeight: `${HomePageHeight}px`,
        minHeight: `${HomePageHeight}px`,
        height: `${HomePageHeight}px`,
      }}
      className=" overflow-x-hidden overflow-y-auto"
    >
      hhh
    </div>
  );
}
