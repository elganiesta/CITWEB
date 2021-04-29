// The TODOs API, written using express
const express = require("express");
const path = require("path");

const app = express();

// Fonction qui permet de lire le body d'une requete
app.use(express.json());
app.use("/", express.static(path.join(__dirname, "client")));

let id = 1;

// We will store the TODOs in a Javascript object
let todos = [
  {
    id: id++,
    title: "Do some stuff",
    isCompleted: false,
  },
  {
    id: id++,
    title: "Do some other stuff",
    isCompleted: false,
  },
  {
    id: id++,
    title: "Do some some stuff",
    isCompleted: false,
  },
];

// Add a TODO
app.post("/api", (req, res) => {
  const title = req.body.title;

  todos.push({
    id: id++,
    title: title,
    isCompleted: false,
  });

  res.send("Todo added");
});

// Get all TODOs
app.get("/api", (req, res) => {
  res.send(todos);
});

// Update a TODO
app.put("/api/:id", (req, res) => {
  const todoId = req.params.id;

  let myTodo = todos.find((todo) => todo.id == todoId);

  const { title, isCompleted } = req.body;

  // Si on n'envoie pas de title, on laisse l'ancien title
  myTodo.title = title ? title : myTodo.title;
  // On fait la vérification === undefined car on peut envoyer isCompleted == false
  myTodo.isCompleted =
    isCompleted === undefined ? myTodo.isCompleted : isCompleted;

  res.send("Todo updated");
});

// Delete a TODO
app.delete("/api/:id", (req, res) => {
  const todoId = req.params.id;

  todos = todos.filter((todo) => todo.id != todoId);

  res.send("Todo deleted");
});

app.listen(5000, () => {
  console.log(`Server started at port ${5000}`);
});
