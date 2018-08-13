import React from "react"
// Redux
import { connect } from "react-redux"
// Components
import RepoListItem from "./RepoListItem"
// Actions
import { apiCreateBookmark } from "../actions/repos"

const RepoList = props => (
  <div>
    <h3> Results: </h3>
    {
      props.repos.map(repo => (
        <RepoListItem 
          onClick={props.onCreateBookmark} 
          key={repo.id} 
          repo={repo} 
        />
      ))
    }
  </div>
)

const mapStateToProps = state => ({
  repos: state.repos
})

const mapDispatchToProps = dispatch => ({
  onCreateBookmark: payload => {
    dispatch(apiCreateBookmark({ payload }))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(RepoList)