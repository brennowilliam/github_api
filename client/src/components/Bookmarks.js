import React from "react"
import { connect } from "react-redux"

// Selectors
import bookmarks$ from "../selectors/bookmarks"

const Bookmarks = props => (
  <div>
    <h1>Bookmarks</h1>
    <ul>
      {
        props.bookmarks.map(bookmark => <li>{bookmark.fullName}</li>)
      }
    </ul>
  </div>
)

const mapStateToProps = state => ({
  bookmarks: bookmarks$(state.repos, state.bookmarks)
})

const mapDispatchToProps = dispatch => ({
  
})

export default connect(mapStateToProps, mapDispatchToProps)(Bookmarks)