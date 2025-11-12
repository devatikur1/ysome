import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UiContext } from "../contexts/Ui/UiContext";

export default function Four0Four() {
  const { HomePageOutletWidth, HomePageHeight } = useContext(UiContext);
  const navigate = useNavigate();

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
      <div className="flex flex-col items-center justify-center gap-6 px-6 text-center">
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight">
          404
        </h1>

        <p className="text-sm md:text-base text-subtext/80 max-w-[720px]">
          😕 The page you’re looking for doesn’t exist or is not available right
          now.
        </p>

        <div className="flex gap-3">
          <Link
            to="/"
            className="px-4 py-2 bg-primary text-white rounded-md shadow-sm hover:opacity-95"
            aria-label="Go to homepage"
          >
            Go home
          </Link>

        </div>
      </div>
    </div>
  );
}
