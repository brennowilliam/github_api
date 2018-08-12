import { applyMiddleware, createStore, combineReducers } from "redux"

// Redux logger
import logger from "redux-logger"

// Reducers
import reposReducer from "../reducers/repos";
import bookmarksReducer from "../reducers/bookmarks";

export default () => {
  const store = createStore(
    combineReducers({
      repos: reposReducer,
      bookmarks: bookmarksReducer
    }),
    ApplyMiddleware(logger)
  )

  return store
}