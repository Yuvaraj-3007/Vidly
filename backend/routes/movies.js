const express = require("express");
const validateId = require("../middleware/validateId");
const Movie = require("../models/movie");

const router = express.Router();

// GET all movies
router.get("/", async (req, res) => {
  const movies = await Movie.find().sort("title");
  res.json(movies);
});

// GET movie by ID
router.get("/:id", validateId, async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  if (!movie) return res.status(404).send("Movie not found");
  res.json(movie);
});

// CREATE movie
router.post("/", async (req, res) => {
  if (!req.body.title) {
    return res.status(400).send("Title is required.");
  }

  const movie = new Movie({
    title: req.body.title,
    year: req.body.year,
    rating: req.body.rating,
  });

  await movie.save();
  res.status(201).json(movie);
});

// DELETE movie
router.delete("/:id", validateId, async (req, res) => {
  const movie = await Movie.findByIdAndDelete(req.params.id);

  if (!movie) {
    return res.status(404).send("The movie with the given ID was not found.");
  }

  res.status(204).send();
});

module.exports = router;
