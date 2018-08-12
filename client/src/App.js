import React, { Component } from 'react';
// Redux
import { connect } from "react-redux"

// Components
import SearchForm from "./components/SearchForm"

// Actions
import { fetchRepos } from "./actions/repos"

class App extends Component {
  state = {
    repos: [],
    loading: true
  }

  componentDidMount() {
    // this.callApi()
    //   .then(response => this.setState(() => ({ response })))
  }

  // callApi = async () => await fetch('search/r').then(res => res.json())

  handleOnSubmit = async (searchTerm) => {
    await fetch(`api/search/${searchTerm}`)
      .then(response => response.json())
      .then(response => this.props.onFetchRepos(response))
  }

  render() {
    // Some local styles
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
        textAlign: 'center'
      }
    }

    const repos = this.state.response
    return (
      <div style={styles.container}>
        <div style={styles.header}>
          <h1> GitHub Repos Project </h1>
          <h3> By Brenno Ferreira </h3>
        </div>
        <SearchForm onSubmit={this.handleOnSubmit}/>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onFetchRepos: repos => {
    dispatch(fetchRepos(repos))
  }
})

export default connect(null, mapDispatchToProps)(App);
