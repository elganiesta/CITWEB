// ID dyal todos, variable a chaque ajout d'une nouvelle todo
let i = 1;

// PAS TOUCHE
// Fonction pour créer les todos
const createTodo = (title, isCompleted = false) => {
  return {
    id: i++,
    title: title,
    isCompleted: isCompleted,
  };
};

// PAS TOUCHE
// Fonction katred todos HTMl elements
const todoToHTML = (todo) => {
  return `<div class="d-flex justify-content-between align-items-center my-2">
            <input onchange=changeTodo(${todo.id}) type="checkbox" ${
    todo.isCompleted && "checked"
  } />
            <span ${
              todo.isCompleted && `class="text-decoration-line-through"`
            }  >${todo.title}</span>
            <div>
              <input onclick=deleteTodo(${
                todo.id
              }) class="btn btn-danger" type="button" value="Delete" />
            </div>
          </div>`;
};

// PAS TOUCHE
// Fonction kat ajouti les todos wst l'HTML
const renderTodos = (todos) => {
  let todosToHTML = "";
  let completedTodosToHTML = "";

  todos.forEach((todo) => {
    todo.isCompleted
      ? (completedTodosToHTML += todoToHTML(todo))
      : (todosToHTML += todoToHTML(todo));
  });

  document.getElementById("todos").innerHTML = todosToHTML;
  document.getElementById("completed-todos").innerHTML = completedTodosToHTML;
};

// Fonction de suppression dyal todos
const deleteTodo = async (id) => {
  // We send a DELETE request here
  await axios.delete("/api/" + id);

  // After the request is done, we update the UI
  todos = todos.filter((todo) => todo.id != id);
  renderTodos(todos);
};

// Fonction de modification dyal todos
const changeTodo = async (id) => {
  let todo = todos.find((todo) => todo.id == id);

  // We send a PUT request to change the isCompleted
  await axios.put("/api/" + id, {
    isCompleted: !todo.isCompleted,
  });
  todo.isCompleted = !todo.isCompleted;

  renderTodos(todos);
};

// Storage dyal todos, b7al une base de données
let todos = [];
const loadData = async () => {
  // We load data from the server using a GET request
  result = await axios.get("/api");
  todos = result.data;
  renderTodos(todos);
};

// Ajout des todos
document
  .getElementById("submit-todo")
  .addEventListener("click", async (event) => {
    let title = document.getElementById("title").value;

    // We send a POST request to add a new Todo
    await axios.post("/api", { title: title });

    let todo = createTodo(title);

    todos.push(todo);
    renderTodos(todos);
  });

loadData();
