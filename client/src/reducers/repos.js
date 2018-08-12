
const reposReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_REPOS":
      return [...state, action.payload]
    default:
      return state
  }
}

export default reposReducer