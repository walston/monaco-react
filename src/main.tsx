import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./app.css";

import App from "./app";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
