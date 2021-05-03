import express from "express";

const app = express();

app.use("/", express.static("public"));

if (process.env.REDIRECT_HTTP) {
  app.use(function (request, response) {
    if (!request.secure) {
      response.redirect("https://" + request.headers.host + request.url);
    }
  });
}

export default app;
