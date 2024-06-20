import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "./i18n";
import { App } from "./App";
import { CssBaseline } from "@mui/joy";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <CssBaseline></CssBaseline>
    <App />
  </React.StrictMode>
);
