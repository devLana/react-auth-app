import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import express from "express";
import path from "path";
import fs from "fs";
import App from "../app/App";

const app = express();

app.use(express.static(path.resolve(process.cwd(), "client-build")));

app.get("*", (req, res) => {
  fs.readFile(
    path.join(process.cwd(), "client-build", "index.html"),
    "utf8",
    (err, data) => {
      if (err) {
        return res.status(500).send("Error!");
      }

      const jsxMarkup = ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={{}}>
          <App />
        </StaticRouter>
      );

      const htmlMarkup = data.replace(
        '<div id="app-root"></div>',
        `<div id="app-root">${jsxMarkup}</div>`
      );

      return res.status(200).send(htmlMarkup);
    }
  );
});

app.listen(9000, () => {
  // eslint-disable-next-line no-console
  console.log("app listening on port 9000");
});
