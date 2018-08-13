import React from "react"
// import { connect } from "react-redux"
// import { apiCreateBookmark } from "../actions/repos"

const RepoListItem = props => (
  <div>
    <div>
      Repo: {props.fullName} | Stars: {props.stars} | Owner: {props.owner} | Forks: {props.forks} 
      <button 
        onClick={() => props.onClick(props.id)}
      >
        Bookmark
      </button>
    </div>
  </div>
)

// const mapDispatchToProps = dispatch => ({
//   onCreateBookmark: id => {
//     dispatch(apiCreateBookmark({ id: id }))
//   }
// })


// export default connect(null, mapDispatchToProps)(RepoListItem)
export default RepoListItem