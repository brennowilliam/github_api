import express from 'express'

const apiRouter = express.Router()

// Test Data
const repos = [
  {
    id: 2126244,
    name: 'bootstrap',
    stargazers_count: 126675
  },
  {
    id: 2126244,
    name: 'bootstrap',
    stargazers_count: 126675
  },
  {
    id: 2126244,
    name: 'bootstrap',
    stargazers_count: 126675
  }
]

// GET /search/react -> Returns assets that contains react in their name
apiRouter.get('/search/:term', (req, res) => {
  res.json(repos)
})

// PUT /bookmark/1 -> Returns an specific asset if it exists
apiRouter.put('/bookmark/:id', (req, res) => {
  res.send('Adding a new bookmark')
})

// GET /bookmark -> Returns all bookmarks
apiRouter.get('/bookmark', (req, res) => {
  res.send('Returning all bookmarks')
})

export default apiRouter