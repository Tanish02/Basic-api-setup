const express = require("express");
const app = express();
const PORT = 3010;

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
  { id: 100, name: "Tanish sharma" },
  { id: 200, name: "Sharma tanish" },
];

let usersNumber = [
  { id: 101, name: "Tanish sharma", number: 1234567890 },
  { id: 201, name: "Sharma tanish", number: 9876543210 },
];

app.post("/api/users", (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
  };

  users.push(newUser);
  res.send(201).send(newUser);
});


// check if users data ex
// server listening
const port = 3010;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  console.log("users", users);
  console.log("usersNumber", usersNumber);
});
