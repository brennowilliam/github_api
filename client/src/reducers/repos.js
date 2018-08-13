
const reposReducer = (state = [], action) => {
  switch (action.type) {
    case "API_FETCH_REPOS_SUCCEEDED":
      return [...action.payload]
    default:
      return state
  }
}

export default reposReducer