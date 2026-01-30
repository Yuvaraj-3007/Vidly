const express = require("express");
const cors = require("cors");
const movies = require("./routes/movies");

const app = express();

const corsOptions = {
  origin: process.env.CORS_ORIGIN || "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ status: "ok", message: "Vidly API is running" });
});

app.use("/api/movies", movies);

module.exports = app;




