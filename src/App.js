import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import HomeLayout from "./layout/HomeLayout";
import RandomVideosPage from "./pages/RandomVideosPage";
import RandomShortsPage from "./pages/RandomShortsPage";
import SubscriptionsPage from "./pages/SubscriptionsPage";
import PlayVideoInterFacePage from "./pages/PlayVideoInterFacePage";
import LikedVideoPage from "./pages/LikedVideoPage";
import YouPage from "./pages/YouPage";
import HistoryPage from "./pages/HistoryPage";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<RandomVideosPage />} />
          <Route path="shorts/*" element={<RandomShortsPage />} />
          <Route path="/channel" element={<SubscriptionsPage />} />
          <Route path="/liked" element={<LikedVideoPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/you" element={<YouPage />} />
          <Route path="/watch" element={<PlayVideoInterFacePage />} />
        </Route>
        {/* <Route path="watch?v=:id" /> */}
        <Route path="*" element={<h1>404 | Page Not Found</h1>} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}
