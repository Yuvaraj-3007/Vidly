const express = require("express");
const movies = require("./routes/movie");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ status: "ok", message: "Vidly API is running" });
});

app.use("/api/movies", movies);

module.exports = app;




