import "core-js/features/array/find";
import "core-js/modules/es.promise";
import "core-js/modules/es.array.iterator";

import { StrictMode } from "react";
import { hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "../app/App";

hydrate(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
  document.getElementById("app-root")
);
