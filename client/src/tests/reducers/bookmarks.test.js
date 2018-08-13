import bookmarksReducer from "../../reducers/bookmarks";
import mockData from "./mockData"
import { API_FETCH_BOOKMARKS_SUCCEEDED, API_DELETE_BOOKMARK_SUCCEEDED } from "../../actions/constants"    

test("should fetch list of bookmarks", () => {
  const state = bookmarksReducer(mockData, API_FETCH_BOOKMARKS_SUCCEEDED)
  expect(state).toEqual([...mockData])
})

test("should delete a bookmark", () => {
  // This needs more work, but just put this in place to remind us later.
  const state = bookmarksReducer(mockData, API_DELETE_BOOKMARK_SUCCEEDED)
  expect(state).toEqual([...mockData])
})
