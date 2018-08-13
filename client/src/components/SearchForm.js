import React from "react"
// Redux
import { connect } from "react-redux"
// Actions
import { fetchRepos } from "../actions/repos"
import { apiFetchReposRequested, apiFetchBookmarks } from "../actions/repos"

// Local Styles
const styles = {
  error: {
    color: '#f00',
    fontWeight: 'bold',
    border: "1px solid #f00"
  }
}

class SearchForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      repoName: '',
      error: ''
    }
  }

  onSubmit = e => {
    e.preventDefault()

    if (!this.state.repoName) {
      this.setState(() => ({
        error: 'Please enter a repo name that you wish to search'
      }))
    } else {
      this.setState(() => ({ error: '' }))
      // this.props.onSubmit(this.state.repoName)
      this.props.onSubmit({ search: this.state.repoName })
    }
  }

  onRepoNameChange = e => {
    const repoName = e.target.value
    this.setState(() => ({ repoName }))
  }

  render() {
    return (  
      <div>
        {this.state.error && (
          <div style={styles.error}>
            <p>{this.state.error}</p>
          </div>
        )}

      <form onSubmit={this.onSubmit}>
        <input 
          type="text"
          placeholder="Enter a repo name"
          autoFocus
          value={this.state.repoName}
          onChange={this.onRepoNameChange}
        />

        <button>Search</button>
      </form>
    </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: search => {
    dispatch(apiFetchReposRequested({ search }))
  }
})
export default connect(null, mapDispatchToProps)(SearchForm)
