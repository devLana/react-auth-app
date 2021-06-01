import "core-js/features/array/find";
import "core-js/modules/es.promise";
import "core-js/modules/es.array.iterator";

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
