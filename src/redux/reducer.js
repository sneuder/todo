const initialState = {
  shownTodos: [],
}

export const reducer = (state = initialState, payload)  => {
  if(payload.type === 'UPDATE_TODOS') {
    return {
      ...state,
      shownTodos: [...payload.todo]
    }
  }

  return state;
}
