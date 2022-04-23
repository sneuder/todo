export const getTodos = (filter) => {
  let todos = JSON.parse(localStorage.getItem('todos-todoapp')) || [];
}

export const addTodos = (todo) => {
  let todos = JSON.parse(localStorage.getItem('todos-todoapp')) || [];
  todos.push(todo);
  localStorage.setItem('todos-todoapp', JSON.stringify(todos));
}