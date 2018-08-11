import React, { Component } from 'react';

class App extends Component {
  state = {
    response: []
  }

  componentDidMount() {
    this.callApi()
      .then(response => this.setState(() => ({ response })))
  }

  callApi = async () => await fetch('search/r').then(res => res.json())

  render() {
    const repos = this.state.response
    return (
      <div>
        <ul>
          {
            repos.map(res => <li>{res.name}</li> )
          }
        </ul>
      </div>
    );
  }
}

export default App;
