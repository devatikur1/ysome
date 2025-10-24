import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import UiContextProvider from "./contexts/Ui/UiContextProvider";
import { SpeedInsights } from "@vercel/speed-insights/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UiContextProvider>
      <App />
      <SpeedInsights />
    </UiContextProvider>
  </React.StrictMode>
);
