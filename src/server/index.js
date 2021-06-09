const express = require("express");
const path = require("path");
// import React from "react";
// import { renderToString } from "react-dom/server";
// import { StaticRouter } from "react-router-dom";
// import express from "express";
// import path from "path";
// import App from "../src/App";

const app = express();

app.use(express.static(path.join(process.cwd(), "build")));

app.get("/*", (req, res) => {
  // const markup = renderToString(
  //   <StaticRouter>
  //     <App />
  //   </StaticRouter>
  // );
  // res.sendFile(path.resolve(process.cwd(), "build/index.html"));
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>React Auth App</title>
      </head>
      <body>
        <noscript>
          JavaScript is disabled. Enable JavaScript to continue using this app
        </noscript>
        <div id="app-root">Hello World</div>
      </body>
    </html>

  `);
});

app.listen(9000, () => {
  // eslint-disable-next-line no-console
  console.log("app listening on port 9000");
});
