const submitButton = document.querySelector('button[type="submit"]');
const todoWrapper = document.getElementById("todo-wrapper");

const getTodos = () => {
  const todos = JSON.parse(localStorage.getItem("todos"));

  return todos || [];
};

submitButton.addEventListener("click", () => {
  const inputField = document.querySelector('input[name="todo"]');
  const fieldValue = inputField.value;

  const existingTodos = getTodos();
  localStorage.setItem("todos", JSON.stringify([...existingTodos, fieldValue]));

  const newTodo = document.createElement("div");
  newTodo.classList.add("single-todo");

  newTodo.innerHTML = `
    <p>${fieldValue}</p>
    <button type="button" class="delete">X</button>
  `;

  todoWrapper.appendChild(newTodo);

  inputField.value = "";
});

const renderTodos = () => {
  const todos = getTodos();
  todoWrapper.innerHTML = "";

  todos.forEach((todo) => {
    const newTodo = document.createElement("div");
    newTodo.classList.add("single-todo");

    newTodo.innerHTML = `
      <p>${todo}</p>
      <button type="button" class="delete">X</button>
    `;

    todoWrapper.appendChild(newTodo);
  });
};

renderTodos();

const deleteButtons = document.getElementsByClassName("delete");

Array.from(deleteButtons).forEach((button, idx) => {
  button.addEventListener("click", () => {
    const existingTodos = getTodos();
    existingTodos.splice(idx, 1);
    localStorage.setItem("todos", JSON.stringify(existingTodos));

    renderTodos();
  });
});
