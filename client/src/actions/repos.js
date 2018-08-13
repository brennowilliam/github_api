export const fetchRepos = ( payload ) => ({
  type: "FETCH_REPOS",
  payload
})

export const fetchBookmark = () => ({
  type: "FETCH_BOOKMARKS"
})
export const bookmarkRepo = (payload) => ({
  type: "BOOKMARK_REPO",
  payload
})

export const apiFetchReposRequested = (payload) => ({
  type: "API_FETCH_REPOS_REQUESTED",
  payload
})
export const apiFetchReposSucceeded = (payload) => ({
  type: "API_FETCH_REPOS_SUCCEEDED",
  payload
})
export const apiFetchReposFailed = (payload) => ({
  type: "API_FETCH_REPOS_FAILED",
  payload
})

export const apiFetchBookmarks = () => ({
  type: "API_FETCH_BOOKMARKS"
})