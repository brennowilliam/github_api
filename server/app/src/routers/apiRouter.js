import express from 'express'

import _ from "lodash"
import axios from "axios"

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

const gitHubApiUrl = 'https://api.github.com/repositories'

let bookmarks = []

// GET /search/react -> Returns assets that contains react in their name
apiRouter.get('/search/:term', async (req, res) => {
  const searchTerm = req.params.id
  let results = []
  
  await axios.get(`${gitHubApiUrl}?q=tetris`)
    .then(response => {
      results = _.map(response.data, repo => {
        return {
          id: repo.id,
          name: repo.name
        }
      })
    })
    .catch(error => console.log('Something went wrong while fetching or parsing data.', error))

  res.send({ results: results })
})

// PUT /bookmark/1 -> Returns an specific asset if it exists
apiRouter.post('/bookmark', (req, res) => {
  console.log(req)
  const newBookmark = req.body
  bookmarks = [...bookmarks, newBookmark]
  res.send(newBookmark)
})

// GET /bookmark -> Returns all bookmarks
apiRouter.get('/bookmark', (req, res) => {
  res.json(bookmarks)
})

export default apiRouter