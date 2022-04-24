const initialState = {
  shownTodos: [],
}

export const reducer = (state = initialState, action)  => {
  if(action.type === 'UPDATE_TODOS') {
    return {
      ...state,
      shownTodos: [...action.payload]
    }
  }

  return state;
}
