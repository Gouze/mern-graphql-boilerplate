const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res, next) => {
  res.send("hello world!");
});

app.listen(3000);
