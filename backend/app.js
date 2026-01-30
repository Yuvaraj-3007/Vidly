const express = require("express");
const cors = require("cors");
const movies = require("./routes/movie");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ status: "ok", message: "Vidly API is running" });
});

app.use("/api/movies", movies);

module.exports = app;




