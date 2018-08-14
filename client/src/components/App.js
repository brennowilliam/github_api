import React, { Component } from 'react';
// Redux
import { connect } from "react-redux"

// Components
import SearchForm from "./SearchForm"
import RepoList from "./RepoList"

// Actions
import { apiFetchReposRequested } from "../actions/repos"

class App extends Component {
  state = {
    isLoading: false
  }

  render() {
    return (
      <div>
        <SearchForm onSubmit={this.props.onSubmit}/>
        {
          this.state.isLoading 
          ? <p> Loading... </p>
          : <RepoList />
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  repos: state.repos
})

const mapDispatchToProps = dispatch => ({
  onSubmit: repo => {
    dispatch(apiFetchReposRequested(repo))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
