import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import HomePage from "./layout/HomePage";
import RandomVideosPage from "./pages/RandomVideosPage";
import RandomShortsPage from "./pages/RandomShortsPage";
import SubscriptionsLayout from "./layout/SubscriptionsLayout";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<HomePage />}>
          <Route index element={<RandomVideosPage />} />
          <Route path="shorts/*" element={<RandomShortsPage />} />
          <Route path="/channel" element={<SubscriptionsLayout />}>
            <Route index element={<RandomShortsPage />} />
            <Route path=":channelPart" element={<RandomShortsPage />} />
          </Route>
        </Route>
        {/* <Route path="watch?v=:id" /> */}
        <Route path="*" element={<h1>404 | Page Not Found</h1>} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}
