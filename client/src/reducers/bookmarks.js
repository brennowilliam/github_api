
const bookmarksReducer = (state = [], action) => {
  switch (action.type) {
    case 'API_CREATE_BOOKMARK':
      return [...state, action.payload.id]
    default:
      return state
  }
}

export default bookmarksReducer