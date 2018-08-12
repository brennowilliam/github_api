import express from 'express'

// Controllers
import reposController from "../controllers/reposController"
import bookMarksController from "../controllers/bookmarksController"

const apiRouter = express.Router()

// GET /search/react -> Returns assets that contains react in their name
apiRouter.get('/search/:term', reposController.fetchAll)

// POST /bookmark/1 -> Returns an specific asset if it exists
// GET /bookmark -> Returns all bookmarks
// apiRouter.route('/bookmarks')
//   .get(bookMarksController.fetchAll)
//   .post(bookMarksController.create)

// // DELETE /bookmark/:id -> Delete a bookmark
// apiRouter.delete('/bookmarks/:id', bookMarksController.delete)

export default apiRouter