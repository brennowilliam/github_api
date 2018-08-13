// Repos
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

// Bookmarks
export const apiFetchBookmarksRequested = (payload) => ({
  type: "API_FETCH_BOOKMARKS_REQUESTED",
  payload
})

export const apiFetchBookmarksSucceeded = (payload) => ({
  type: "API_FETCH_BOOKMARKS_SUCCEEDED",
  payload
})

export const apiFetchBookmarksFailed = (payload) => ({
  type: "API_FETCH_BOOKMARKS_FAILED",
  payload
})

export const apiDeleteBookmarkSucceeded = (payload) => ({
  type: "API_DELETE_BOOKMARK_SUCCEEDED",
  payload
})

export const apiDeleteBookmarkFailed = (payload) => ({
  type: "API_DELETE_BOOKMARK_FAILED",
  payload
})

export const apiDeleteBookmark = (payload) => ({
  type: "API_DELETE_BOOKMARK",
  payload
})

export const apiCreateBookmark = (payload) => ({
  type: "API_CREATE_BOOKMARK",
  payload
})
