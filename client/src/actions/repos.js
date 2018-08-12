import axios from "axios"

export const fetchRepos = ( payload ) => {
console.log(payload)
  return  {
    type: "FETCH_REPOS",
    payload
  }
}