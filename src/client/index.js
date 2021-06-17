import "core-js/features/array/find";
import "core-js/modules/es.promise";
import "core-js/modules/es.array.iterator";

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

// import React from "react";
// import ReactDOM from "react-dom";
// import App from "../app/App";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("app-root")
// );
