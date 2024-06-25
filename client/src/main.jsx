import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

// Pages
import App from "./App.jsx"; // main
import Sources from "./pages/SourcesPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx"

const router = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <NotFoundPage />},
  { path: "/sources", element: <Sources />, errorElement: <NotFoundPage /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
