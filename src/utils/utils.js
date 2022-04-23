export const getTodos = (filter) => {
  let todos = JSON.parse(localStorage.getItem('todos-todoapp')) || [];

  switch (filter) {
    case 'all': return todos;
    case 'active': return todos.filter(todo => todo.done !== true);
    case 'completed': return todos.filter(todo => todo.done !== false);
  }
}

export const addTodos = (todo) => {
  let todos = JSON.parse(localStorage.getItem('todos-todoapp')) || [];
  todos.unshift(todo);
  localStorage.setItem('todos-todoapp', JSON.stringify(todos));
}