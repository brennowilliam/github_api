import React from "react"

const styles = {
  container: {
    border: '1px solid white',
    padding: 10,
    marginBottom: 10,
    display: 'flex'
  },
  button: {
    marginLeft: 10,
    border: 'none',
    background: '#29bbe8',
    color: '#fff',
    border: 'none',
    fontWeight: 'bold',
    padding: '1.2rem 1.5rem',
  }
}

const RepoListItem = props => (
  <div style={styles.container}>
    <div>

      Repo: {props.repo.fullName} | Stars: {props.repo.stars} | Owner: {props.repo.owner} | Forks: {props.repo.forks} 
      <button 
        onClick={() => props.onClick(props.repo)}
        style={styles.button}
      >
        { props.buttonLabel ? props.buttonLabel : "Bookmark" }
      </button>
    </div>
  </div>
)

export default RepoListItem
