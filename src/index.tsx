import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "./i18n";
import { Home } from "./pages/Home";
import { CssBaseline } from "@mui/joy";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CssBaseline></CssBaseline>
    <RouterProvider router={router} />
  </React.StrictMode>
);
