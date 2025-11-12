import React, { useContext } from "react";
import { UiContext } from "../contexts/Ui/UiContext";

export default function ChanalDataPage() {
  const { HomePageOutletWidth, HomePageHeight } = useContext(UiContext);

  return (
    <div
      style={{
        maxWidth: `${HomePageOutletWidth}px`,
        minWidth: `${HomePageOutletWidth}px`,
        width: `${HomePageOutletWidth}px`,

        maxHeight: `${HomePageHeight}px`,
        minHeight: `${HomePageHeight}px`,
        height: `${HomePageHeight}px`,
      }}
      className="w-full h-full flex items-center justify-center"
    >
      <p className="text-sm md:text-base text-subtext/80 text-center py-16 line-clamp-1 w-[80%]">
        😔 Sorry, this feature is not available at this time.
      </p>
    </div>
  );
}
