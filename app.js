const express = require("express");
const path = require("path");
const app = express();

// Serve frontend files
app.use(express.static(path.join(__dirname, "frontend")));

// Route all requests to index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "index.html"));
});

// Backend APIs (if any)
app.listen(8080, "0.0.0.0", () => console.log("Server running on port 8080"));
