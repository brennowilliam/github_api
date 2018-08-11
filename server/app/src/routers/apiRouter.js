import express from 'express'

export const apiRouter = express.Router()

// Test Data
const repos = [
  {
    id: '121gfd',
    name: 'React',
    stars: 9000
  },
  {
    id: '124g',
    name: 'ReactDOM',
    stars: 8000
  },
  {
    id: '12312vc',
    name: 'React-Redux',
    stars: 5000
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
