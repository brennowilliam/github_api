import React from "react"
// Redux
import { connect } from "react-redux"
// Components
import RepoListItem from "./RepoListItem"

const styles = {
  list: {
    overflow: 'scroll'
  }
}

const RepoList = props => (
  <div style={styles.list}>
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