import "core-js/features/array/find";
import "core-js/modules/es.promise";
import "core-js/modules/es.promise.finally";
import "core-js/modules/es.array.iterator";
import "regenerator-runtime/runtime";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "../app/App";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("app-root")
);
