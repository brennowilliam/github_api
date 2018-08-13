import React from "react"

const RepoListItem = props => (
  <div>
    <div>
      Repo: {props.repo.fullName} | Stars: {props.repo.stars} | Owner: {props.repo.owner} | Forks: {props.repo.forks} 
      <button 
        onClick={() => props.onClick(props.repo)}
      >
        Bookmark
      </button>
    </div>
  </div>
)

export default RepoListItem
