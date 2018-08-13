import express from 'express'
// Controllers
import reposCtrl from "../controllers/reposController"
import bookmarksCtrl from "../controllers/bookmarksController"

const apiRouter = express.Router()
// GET /search/react -> Returns assets that contains react in their name
apiRouter.get('/search/:term', reposCtrl.fetchAll)
// POST /bookmark/1 -> Returns an specific asset if it exists
// GET /bookmark -> Returns all bookmarks
apiRouter.route('/bookmarks')
  .get(bookmarksCtrl.fetchAll)
  .post(bookmarksCtrl.create)

// DELETE /bookmark/:id -> Delete a bookmark
apiRouter.delete('/bookmarks/:id', bookmarksCtrl.delete)

export default apiRouter
