const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.json({ message: "xablau" });
});

app.listen("3333", () => {
  console.log("BackEnd Server is running!✔");
});
