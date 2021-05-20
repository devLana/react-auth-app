/* eslint-disable react/jsx-filename-extension */

import { StrictMode } from "react";
import { render } from "react-dom";

import App from "./App";

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("app-root")
);
