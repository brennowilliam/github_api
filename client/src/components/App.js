import React, { Component } from 'react';
// Redux
import { connect } from "react-redux"

// Components
import SearchForm from "./SearchForm"
import RepoList from "./RepoList"

// Actions
import { fetchRepos } from "../actions/repos"

class App extends Component {
  state = {
    isLoading: false
  }

  handleOnSubmit = async (searchTerm) => {
    this.setState((prevState) => ({ isLoading: !prevState.isLoading }))
    await fetch(`api/search/${searchTerm}`)
      .then(response => {
        this.setState((prevState) => ({ isLoading: !prevState.isLoading }))
        return response.json()
      })
      .then(response => this.props.onFetchRepos(response.results))
  }

  render() {
    const styles = {
      container: {
        background: '#1e1e1e',
        color: '#fff'
      },
      header: {
        textAlign: 'center',
        borderBottom: '1px solid #8BDDF7',
        marginBottom: 15
      }
    }

    return (
      <div>
        <SearchForm onSubmit={this.handleOnSubmit} />
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
  onFetchRepos: repos => {
    dispatch(fetchRepos(repos))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
