import React, { Component } from 'react';



// Components
import SearchForm from "./components/SearchForm"

class App extends Component {
  state = {
    repos: [],
    loading: true
  }

  componentDidMount() {
    // this.callApi()
    //   .then(response => this.setState(() => ({ response })))
  }

  callApi = async () => await fetch('search/r').then(res => res.json())

  render() {
    // Some local styles
    const styles = {
      container: {
        // display: 'flex',
        // flexWrap: 'wrap',

        background: '#1e1e1e',
        color: '#fff'
      },
      header: {

      }
    }

    const repos = this.state.response
    return (
      <div style={styles.container}>
        <div style={styles.header}>
          <h1> GitHub Repos Project </h1>
          <h3> By Brenno Ferreira </h3>
        </div>
        <SearchForm onSubmit={(repoName) => console.log(repoName)}/>
      </div>
    );
  }
}

export default App;
