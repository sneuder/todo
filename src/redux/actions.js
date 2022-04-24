export function updateTodos(todos) {
  return {
    type: "UPDATE_TODOS",
    payload: todos,
  };
}