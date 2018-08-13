import express from 'express'
// Controllers
import reposCtrl from "../controllers/reposController"
import bookmarksCtrl from "../controllers/bookmarksController"

const apiRouter = express.Router()
// GET /search/react -> Returns assets that contains react in their name
apiRouter.get('/search/:term', reposCtrl.fetchAll)
// GET /bookmark -> Returns all bookmarks
apiRouter.get('/bookmarks', bookmarksCtrl.fetchAll)
// POST /bookmark/1 -> Returns an specific asset if it exists
// DELETE /bookmark/:id -> Delete a bookmark
apiRouter.route('/bookmarks/:id')
  .delete(bookmarksCtrl.delete)
  .post(bookmarksCtrl.create)

export default apiRouter
