export const getTodos = (state) => {
  return JSON.parse(localStorage.getItem('todos-todoapp')) || [];
}