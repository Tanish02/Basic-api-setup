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

let usersNumber = [
  { id: 1, name: "Tanish sharma", number: 1234567890 },
  { id: 2, name: "Sharma tanish", number: 9876543210 },
];

app.post("/api/users", (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
  };

  users.push(newUser);
  res.send(201).send(newUser);
});

// server listening
const port = 3010;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  console.log("users", users);
  console.log("usersNumber", usersNumber);
});
