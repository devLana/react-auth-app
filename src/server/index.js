import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import express from "express";
import path from "path";
import fs from "fs";
import App from "../app/App";

const app = express();

app.use(express.static("client-build"));

app.get("*", (req, res) => {
  const indexHtml = fs.readFileSync(
    path.join(process.cwd(), "client-build", "index.html"),
    { encoding: "utf8", flag: "r" }
  );

  const jsxMarkup = renderToString(
    <StaticRouter location={req.url} context={{}}>
      <App />
    </StaticRouter>
  );

  const htmlMarkup = indexHtml.replace(
    '<div id="app-root"></div>',
    `<div id="app-root">${jsxMarkup}</div>`
  );

  res.send(htmlMarkup);
});

app.listen(9000, () => {
  // eslint-disable-next-line no-console
  console.log("app listening on port 9000");
});
