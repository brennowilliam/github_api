import reposReducer from "../../reducers/repos";

import mockData from "./mockData"

test('should return an empty array when there is no data saved', () => {
  const state = reposReducer(undefined, 'API_FETCH_REPOS_SUCCEEDED')
  expect(state).toEqual([])
})

test("should return an array of objects with the data from the api", () => {
  const state = reposReducer(mockData, 'API_FETCH_REPOS_SUCCEEDED')
  expect(state).toEqual([...mockData])
})

// Of course, a lot more testing goes into here, but this is just to
// set up a place for further testing.