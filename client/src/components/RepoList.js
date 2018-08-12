import React from "react"
// Redux
import { connect } from "react-redux"
// Components
import RepoListItem from "./RepoListItem"

const RepoList = props => (
  <div>
    <h3> Results: </h3>
    {
      props.repos.map(repo => (
        <RepoListItem key={repo.id} {...repo} />
      ))
    }
  </div>
)


const mapStateToProps = state => ({
  repos: state.repos
})

export default connect(mapStateToProps)(RepoList)