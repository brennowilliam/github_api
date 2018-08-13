import reposReducer from "../../reducers/repos";

const mockData = [ 
  { id: 9504214,
    fullName: 'facebook/buck',
    stars: 6002,
    owner: 'facebook',
    forks: 911 
  },
  { 
    id: 49159983,
    fullName: 'BuckleScript/bucklescript',
    stars: 3832,
    owner: 'BuckleScript',
    forks: 267 
  },
  { 
    id: 12799336,
    fullName: 'HubSpot/BuckyClient',
    stars: 1741,
    owner: 'HubSpot',
    forks: 101 
  } 
]

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