const initialState = {
  shownTodos: [],
}

const reducer = (state = initialState, payload)  => {
  if(payload.type === 'UPDATE_TODOS') {
    return {
      ...state,
      shownTodos: [...payload.todo]
    }
  }
}

export default reducer;