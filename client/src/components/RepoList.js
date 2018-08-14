import React from "react"
// Redux
import { connect } from "react-redux"
// Components
import RepoListItem from "./RepoListItem"
// Actions
import { apiCreateBookmark } from "../actions/repos"

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

const RepoList = props => (
  <div style={styles.container}>
    <h3 style={styles.header}> Results </h3>
    <div>
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