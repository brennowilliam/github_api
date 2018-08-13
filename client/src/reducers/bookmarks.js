
const bookmarksReducer = (state = [], action) => {
  switch (action.type) {
    case 'API_FETCH_BOOKMARKS_SUCCEEDED':
      return [...action.payload]
    case 'API_DELETE_BOOKMARKS_SUCCEEDED':
      return [...action.payload]
    default:
      return state
  }
}

export default bookmarksReducer