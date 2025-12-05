const express = require("express");
const app = express();
const PORT = 5000;

app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.send("Welcome to the Home Page!");
});

// sample route
app.get("/api/sample", (req, res) => {
  res.send([
    { id: 1, name: "Tanish sharma" },
    { id: 2, name: "Sharma tanish" },
  ]);
});
