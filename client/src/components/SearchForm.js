import React from "react"

// Local Styles
const styles = {
  formContainer: {
    position: 'relative',
    marginTop: 50,
    display: 'flex',
    justifyContent: 'center'
  },
  form: {
    fontSize: 24
  },
  searchInput: {
    flex: 2,
    border: 'none',
    borderBottom: '2px solid #8bddf7',
    padding: '1.2rem 1.5rem',
    background: 'transparent',
    color: '#8bddf7'
  },
  button: {
    flex: 1,
    background: '#29bbe8',
    color: '#fff',
    border: 'none',
    fontWeight: 'bold',
    padding: '1.2rem 1.5rem'
  },
  error: {
    backgroundColor: "#e5324a",
    color: "white",
    fontWeight: "bold",
    width: "300px",
    padding: "5px",
    textAlign: "center",
    marginTop: "10px",
    marginBottom: "10px"
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
      this.props.onSubmit({ search: this.state.repoName })
    }
  }

  onRepoNameChange = e => {
    const repoName = e.target.value
    this.setState(() => ({ repoName }))
  }

  render() {
    return (  
      <div style={styles.formContainer}>
        {this.state.error && (
          <div style={styles.error}>
            <p>{this.state.error}</p>
          </div>
        )}

      <form onSubmit={this.onSubmit} style={styles.form}>
        <input 
          type="text"
          placeholder="Enter a repo name"
          autoFocus
          value={this.state.repoName}
          onChange={this.onRepoNameChange}
          style={styles.searchInput}
        />

        <button style={styles.button}>Search</button>
      </form>
    </div>
    )
  }
}

export default SearchForm
