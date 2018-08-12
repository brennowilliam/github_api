import React, { Component } from 'react';
// Redux
import { connect } from "react-redux"

// Components
import SearchForm from "./components/SearchForm"
import RepoList from "./components/RepoList"

// Actions
import { fetchRepos } from "./actions/repos"

class App extends Component {
  state = {
    loading: false
  }

  handleOnSubmit = async (searchTerm) => {
    await fetch(`api/search/${searchTerm}`)
      .then(response => response.json())
      .then(response => this.props.onFetchRepos(response.results))
  }

  render() {
    const styles = {
      container: {
        // display: 'flex',
        // flexDirection: 'row',
        // flexWrap: 'wrap',
        // justifyContent: 'center',
        height: '100vh',
        background: '#1e1e1e',
        color: '#fff'
      },
      header: {
        textAlign: 'center',
        borderBottom: '1px solid #8BDDF7'
      }
    }

    return (
      <div style={styles.container}>
        <div style={styles.header}>
          <h1> GitHub Repos Project </h1>
          <h3> By Brenno Ferreira </h3>
        </div>
        <SearchForm onSubmit={this.handleOnSubmit}/>
        <RepoList />
        {/* <div>
          <h3> Results </h3>
          <ul>
            {
              this.props.repos.map(repo => {
                <li>
                  { repo }
                </li>
              })
            }
          </ul>
        </div> */}
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
