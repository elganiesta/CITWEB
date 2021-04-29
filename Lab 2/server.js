// The TODOs API, written using express
const express = require("express");

const app = express();

// Fonction qui permet de lire le body d'une requete
app.use(express.json());

let id = 1;

// We will store the TODOs in a Javascript object
let todos = [
  {
    id: id++,
    task: "Do some stuff",
    isCompleted: false,
  },
  {
    id: id++,
    task: "Do some other stuff",
    isCompleted: false,
  },
  {
    id: id++,
    task: "Do some some stuff",
    isCompleted: false,
  },
];

// Add a TODO
app.post("/", (req, res) => {
  const task = req.body.task;

  todos.push({
    id: id++,
    task: task,
    isCompleted: false,
  });

  res.send("Todo added");
});

// Get all TODOs
app.get("/", (req, res) => {
  res.send(todos);
});

// Update a TODO
app.put("/:id", (req, res) => {
  const todoId = req.params.id;

  let myTodo = todos.find((todo) => todo.id == todoId);

  const task = req.body.task;
  const isCompleted = req.body.isCompleted;

  myTodo.task = task;
  myTodo.isCompleted = isCompleted;

  res.send("Todo updated");
});

// Delete a TODO
app.delete("/:id", (req, res) => {
  const todoId = req.params.id;

  todos = todos.filter((todo) => todo.id != todoId);

  res.send("Todo deleted");
});

app.listen(5000, () => {
  console.log(`Server started at port ${5000}`);
});
