import React from "react"
import { connect } from "react-redux"

import RepoListItem from "./RepoListItem"

// Actions
import { apiFetchBookmarksRequested, apiDeleteBookmark } from "../actions/repos"

const styles = {
  container: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: 20
  },
  header: {
    fontSize: '2rem',
    flex: '0 0 100%',
    textAlign: 'center'
  }
}

const Bookmarks = props => (
  <div style={styles.container}>
    <h1 style={styles.header}>Bookmarks</h1>
    <div>
      {
        props.bookmarks.map(bookmark => (
          <div key={bookmark.id}>
            <RepoListItem
              key={bookmark.id}
              onClick={() => props.deleteBookmark(bookmark.id)}
              repo={bookmark}
              buttonLabel={"Delete"}
            />
          </div>
        ))
      }
    </div>
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