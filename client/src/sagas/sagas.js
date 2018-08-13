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
    yield call(createBookmarkApi, action.payload.id)
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

function createBookmarkApi(id) {
  return fetch(`api/bookmarks`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    redirect: "follow",
    referrer: "no-referrer",
    body: JSON.stringify({ id })
  })
  .then(response => {
    console.log(response)
    return response.json()
  })
}

export default function* watcherSaga() {
  yield takeLatest('API_FETCH_REPOS_REQUESTED', fetchRepos)
  yield takeLatest('API_FETCH_BOOKMARKS_REQUESTED', fetchBookmarks)
  yield takeLatest('API_CREATE_BOOKMARK', createBookmark)
}
