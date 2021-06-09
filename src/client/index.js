import "core-js/features/array/find";
import "core-js/modules/es.promise";
import "core-js/modules/es.array.iterator";

import { StrictMode } from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "../app/App";

render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
  document.getElementById("app-root")
);
