import { call, put, takeLatest } from "redux-saga/effects"

function fetchReposFromApi(searchTerm) {
  return fetch(`api/search/${searchTerm}`)
    .then(response => {
      return response.json()
    })
}

function* fetchRepos(action) {
 try {
   const data = yield call(fetchReposFromApi, action.payload.search)
   yield put({ type: 'API_FETCH_REPOS_SUCCEEDED', payload: data.results })

 } catch (error) {
   yield put({ type: 'API_FETCH_REPOS_FAILED', error })
 }
}

function* fetchBookmarks(action) {
  yield console.log('fetching bookmarks...')
}

function* createBookmark(action) {
  yield console.log('Caught by the sagaaaa..')
}

export default function* watcherSaga() {
  yield takeLatest('API_FETCH_REPOS_REQUESTED', fetchRepos)
  yield takeLatest('API_FETCH_BOOKMARKS_REQUESTED', fetchBookmarks)
  yield takeLatest('API_CREATE_BOOKMARK', createBookmark)
}

// function fetchRepos(action) {
//   try {
//     const data = yield call()
//   }
//   // await fetch(`api/search/${searchTerm}`)
//   // .then(response => {
//   //   this.setState((prevState) => ({ isLoading: !prevState.isLoading }))
//   //   return response.json()
//   // })
//   // .then(response => this.props.onFetchRepos(response.results))
// }

// export function* watcherSaga() {
//   yield takeLatest('API_FETCH_REQUEST', fetchRepos)
// }