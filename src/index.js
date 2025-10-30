import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import UiContextProvider from "./contexts/Ui/UiContextProvider";
import AppContextProvider from "./contexts/App/AppContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppContextProvider>
      <UiContextProvider>
        <App />
      </UiContextProvider>
    </AppContextProvider>
  </React.StrictMode>
);
