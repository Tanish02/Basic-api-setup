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

// post route

let users = [
  { id: 1, name: "Tanish sharma" },
  { id: 2, name: "Sharma tanish" },
];

app.post("/api/users", (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
  };

  users.push(newUser);
  res.send(201).send(newUser);
});
