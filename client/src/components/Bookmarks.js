import React from "react"
import { connect } from "react-redux"

// Actions
import { apiFetchBookmarksRequested, apiDeleteBookmark } from "../actions/repos"

const Bookmarks = props => (
  <div>
    <h1>Bookmarks</h1>
    {
      props.bookmarks.map(bookmark => (
        <div key={bookmark.id}>
          Repo: {bookmark.fullName} | Stars: {bookmark.stars} | Owner: {bookmark.owner} | Forks: {bookmark.forks} 
          <button 
           onClick={() => props.deleteBookmark(bookmark.id)}
          >
            Delete
          </button>
        </div>
      ))
    }
  </div>
)

const mapStateToProps = state => ({
  bookmarks: state.bookmarks //bookmarks$(state.repos, state.bookmarks)
})

const mapDispatchToProps = dispatch => ({
  fetchBookmarks: () => {
    dispatch(apiFetchBookmarksRequested())
  },
  deleteBookmark: id => {
    dispatch(apiDeleteBookmark({id}))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Bookmarks)