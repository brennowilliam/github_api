import React from "react"

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

export default RepoListItem
