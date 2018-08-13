import { applyMiddleware, createStore, combineReducers } from "redux"

import createSagaMiddleware from "redux-saga";
import watcherSaga from "../sagas/sagas";

// Redux logger
import logger from "redux-logger"

// Reducers
import reposReducer from "../reducers/repos";
import bookmarksReducer from "../reducers/bookmarks";

const sagaMiddleWare = createSagaMiddleware()

export default () => {
  const store = createStore(
    combineReducers({
      repos: reposReducer,
      bookmarks: bookmarksReducer
    }),
    applyMiddleware(logger, sagaMiddleWare)
  )

  sagaMiddleWare.run(watcherSaga)

  return store
}