import { call, put, takeLatest } from "redux-saga/effects"

// Repos
function* fetchRepos(action) {
 try {
   const data = yield call(fetchReposFromApi, action.payload.search)
   yield put({ type: 'API_FETCH_REPOS_SUCCEEDED', payload: data.results })

 } catch (error) {
   yield put({ type: 'API_FETCH_REPOS_FAILED', error })
 }
}

function fetchReposFromApi(searchTerm) {
  return fetch(`api/search/${searchTerm}`)
    .then(response => response.json())
}

// Bookmarks
function* fetchBookmarks(action) {
  try {
    const data = yield call(fetchBookmarksFromApi)
    yield put({ type: 'API_FETCH_BOOKMARKS_SUCCEEDED', payload: data.results })
 
  } catch (error) {
    yield put({ type: 'API_FETCH_BOOKMARKS_FAILED', error })
  }
}

function* createBookmark(action) {
  try {
    yield call(createBookmarkApi, action.payload)
    yield put({ type: 'API_CREATE_BOOKMARKS_SUCCEEDED' })
    // If succeed, we fetch and save in state.
    const data = yield call(fetchBookmarksFromApi)
    yield put({ type: 'API_FETCH_BOOKMARKS_SUCCEEDED', payload: data })
  } catch (error) {
    yield put({ type: 'API_CREATE_BOOKMARKS_FAILED', payload: error })
  }
}

function fetchBookmarksFromApi() {
  return fetch('api/bookmarks')
    .then(response => response.json())
}

function createBookmarkApi(payload) {
  return fetch(`api/bookmarks`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    redirect: "follow",
    referrer: "no-referrer",
    body: JSON.stringify(payload)
  })
  .then(response => {
    return response.json()
  })
}

function deleteBookmarkFromApi(id) {
  return fetch(`api/bookmarks/${id}`, {
    method: "DELETE",
    mode: "cors",
    cache: "no-cache",
  })
  .then(response => {
    return response.json()
  })
}
function* deleteBookmark(action) {
  try {
    yield call (deleteBookmarkFromApi, action.payload.id)
    yield put({ type: "API_DELETE_BOOKMARK_SUCCEEDED" })
    const data = yield call(fetchBookmarksFromApi)
    yield put({ type: 'API_FETCH_BOOKMARKS_SUCCEEDED', payload: data })
  } catch (error) {
    yield put({ type: 'API_DELETE_BOOKMARK_FAILED', payload: error })
  }
}


export default function* watcherSaga() {
  yield takeLatest('API_FETCH_REPOS_REQUESTED', fetchRepos)
  yield takeLatest('API_FETCH_BOOKMARKS_REQUESTED', fetchBookmarks)
  yield takeLatest('API_CREATE_BOOKMARK', createBookmark)
  yield takeLatest('API_DELETE_BOOKMARK', deleteBookmark)
}
