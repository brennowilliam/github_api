import React from "react"
// Redux
import { connect } from "react-redux"
// Components
import RepoListItem from "./RepoListItem"
// Actions
import { apiCreateBookmark } from "../actions/repos"

const handleOnSubmit = repo => {
  console.log(repo)
}

const RepoList = props => (
  <div>
    <h3> Results: </h3>
    {
      props.repos.map(repo => (
        <RepoListItem 
          onClick={props.onCreateBookmark} 
          key={repo.id} 
          {...repo} 
        />
      ))
    }
  </div>
)

const mapStateToProps = state => ({
  repos: state.repos
})

const mapDispatchToProps = dispatch => ({
  onCreateBookmark: id => {
    dispatch(apiCreateBookmark({ id: id }))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(RepoList)