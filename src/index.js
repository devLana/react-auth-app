import "core-js/features/array/find";

import { StrictMode } from "react";
import { render } from "react-dom";

import App from "./App";
import "./index.scss";

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("app-root")
);
