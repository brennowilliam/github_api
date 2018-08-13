import React from "react"
// Redux
import { connect } from "react-redux"
// Components
import RepoListItem from "./RepoListItem"
// Actions
import { bookmarkRepo } from "../actions/repos"

const handleOnSubmit = repo => {
  console.log(repo)
}

const RepoList = props => (
  <div>
    <h3> Results: </h3>
    {
      props.repos.map(repo => (
        <RepoListItem key={repo.id} {...repo} onClick={this.handleOnSubmit}/>
      ))
    }
  </div>
)

const mapStateToProps = state => ({
  repos: state.repos
})

const mapDispatchToProps = dispatch => ({
  onBookmarkRepo: id => {
    dispatch(bookmarkRepo({id: id }))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(RepoList)