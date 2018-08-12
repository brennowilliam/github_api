import _ from "lodash"

class BookmarksController {
  constructor() {
    this.bookmarks = []
  }

  create = (req, res) => {
    const newBookmark = req.body
    const isBookmarked = _.find(this.bookmarks, bookmark => bookmark.id === newBookmark.id)

    if (isBookmarked) {
      res.status(201).json({ error: 'Already bookmarked' })
    } else {
      this.bookmarks = [...this.bookmarks, newBookmark]
      res.status(201).json(this.bookmarks)
    }    
  }

  fetchAll = (req, res) => res.status(200).json(this.bookmarks)

  delete = (req, res) => {
    const bookmark = _.findIndex(bookmarks, {id: req.params.id})

    if (!bookmarks[bookmark]) {
      res.status(200).send()
    } else {
      const deletedBookmark = bookmarks[bookmark]
      bookmarks.splice(bookmark, 1)
      res.stats(200).json(deletedBookmark) // Double check the status code here
    }
  }
}

export default new BookmarksController()