// ID dyal todos, variable a chaque ajout d'une nouvelle todo
let i = 1;

// Fonction pour créer les todos
const createTodo = (title, isCompleted = false) => {
  return {
    id: i++,
    title: title,
    isCompleted: isCompleted,
  };
};

// Storage dyal todos, b7al une base de données
let todos = [
  createTodo("Todo lwla"),
  createTodo("Todo tanya", true),
  createTodo("Todo talta"),
  createTodo("Todo rab3a", true),
];

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

// Fonction kat ajouti les todos wst l'HTML
const renderTodos = (todos) => {
  let todosToHTML = "";
  let completedTodosToHTML = "";

  todos.forEach((todo) => {
    // Tahadi c'est une méthode valable

    // if (todo.isCompleted) {
    //   completedTodosToHTML += todoToHTML(todo);
    // } else {
    //   todosToHTML += todoToHTML(todo);
    // }

    todo.isCompleted
      ? (completedTodosToHTML += todoToHTML(todo))
      : (todosToHTML += todoToHTML(todo));
  });

  document.getElementById("todos").innerHTML = todosToHTML;
  document.getElementById("completed-todos").innerHTML = completedTodosToHTML;
};

// Fonction de suppression dyal todos
const deleteTodo = (id) => {
  todos = todos.filter((todo) => todo.id != id);
  renderTodos(todos);
};

// Fonction de modification dyal todos
const changeTodo = (id) => {
  let todo = todos.find((todo) => todo.id == id);
  todo.isCompleted = !todo.isCompleted;

  renderTodos(todos);
};

renderTodos(todos);

// Ajout des todos
document.getElementById("submit-todo").addEventListener("click", (event) => {
  let title = document.getElementById("title").value;
  let todo = createTodo(title);

  todos.push(todo);
  renderTodos(todos);
});
