import _ from "lodash"

class BookmarksController {
  constructor() {
    this.bookmarks = []
  }

  create = (req, res) => {
    const newBookmark = req.body.payload
  
    const isBookmarked = _.find(this.bookmarks, bm => {
      return bm.id === newBookmark.id
    })

    if (isBookmarked) {
        res.status(201).json({ error: 'Already bookmarked' })
    } else {
      this.bookmarks = [...this.bookmarks, newBookmark]
      res.status(201).json(this.bookmarks)
    } 
  }

  fetchAll = (req, res) => res.status(200).json(this.bookmarks)

  delete = (req, res) => {
    const bookmarkIndex = _.findIndex(this.bookmarks, bm => bm.id === parseInt(req.params.id))
    
    if (bookmarkIndex > -1) {
      const deletedBookmark = this.bookmarks[bookmarkIndex]
      this.bookmarks.splice(bookmarkIndex, 1)
      res.status(200).json(deletedBookmark) // STATUS CODE FOR THIS?
    } else {
      res.states(200).send()
    }
  }
}

export default new BookmarksController()