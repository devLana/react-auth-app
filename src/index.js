import React from "react";
import ReactDOM from "react-dom";

const text = "Hello React with Webpack and Babel";

ReactDOM.render(
  <React.StrictMode>
    <div>{text}</div>
  </React.StrictMode>,
  document.getElementById("app-root")
);
