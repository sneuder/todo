export const getTodos = (filter) => {
  let todos = JSON.parse(localStorage.getItem("todos-todoapp")) || [];

  switch (filter) {
    case "/":
      return todos;
    case "/active":
      return todos.filter((todo) => todo.done !== true);
    case "/completed":
      return todos.filter((todo) => todo.done !== false);
    default: 
      return [];
  }
};

export const addTodos = (todo) => {
  let todos = JSON.parse(localStorage.getItem("todos-todoapp")) || [];
  todos.unshift(todo);
  localStorage.setItem("todos-todoapp", JSON.stringify(todos));
};

export const completeTodo = (todo) => {
  let todos = JSON.parse(localStorage.getItem("todos-todoapp")) || [];
  todos.map((t) => {
    if (t.id === todo.id) {
      
      if (t.done === true) {
        t.done = false;
        return t;
      }

      if (t.done === false) {
        t.done = true;
        return t;
      }
    }

    return t;
  });

  localStorage.setItem("todos-todoapp", JSON.stringify(todos));
  return todos;
};

export const removeTodo = (todo, todos) => {
  todos = todos.filter((t) => t.id !== todo.id);
  localStorage.setItem("todos-todoapp", JSON.stringify(todos));
  return todos;
};

export const removeAllTodos = () => {
  let todos = JSON.parse(localStorage.getItem("todos-todoapp"));
  todos = todos.filter(todo => todo.done !== true);
  localStorage.setItem("todos-todoapp", JSON.stringify(todos));
  return [];
}