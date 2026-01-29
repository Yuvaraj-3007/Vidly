const app = require("./app");
const db = require("./db");

// Connect DB
db.connect().then(() => {
  console.log("Connected to MongoDB:", db.url);
});

// IMPORTANT: bind to 0.0.0.0 for Docker
const port = process.env.PORT || 3001;

app.listen(port, "0.0.0.0", () => {
  console.log(`🚀 Server running on port ${port}`);
});

