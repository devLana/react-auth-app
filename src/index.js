import { StrictMode } from "react";
import { render } from "react-dom";

import App from "./App";

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("app-root")
);

if (process.env.NODE_ENV !== "production") {
  module.hot.accept();
}
