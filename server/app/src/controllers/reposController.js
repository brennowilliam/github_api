import axios from "axios"
import _ from "lodash"

const API_URL = 'https://api.github.com/search/repositories'

const reposController = {
  async fetchAll(req, res) {
    const searchTerm = req.params.term
    

    await axios.get(`${API_URL}?q=${searchTerm}&sort=stars`)
      .then(response => {
        if (!response) {
          return res.status(404).send({
            message: `Repo with name ${searchTerm} not found.`
          })
        }
        const results = _.map(response.data.items, repo => {
          return {
            id: repo.id,
            fullName: repo.full_name,
            stars: repo.stargazers_count,
            owner: repo.owner.login,
            forks: repo.forks_count
          }
        })
        res.status(200).json({ results })
      })
      .catch(error => console.log('Something went wrong while fetching or parsing data.', error))
  
  }
}

// Go from here tomorrow!!
// const fetch = (url, searchTerm) => {
  
// }

export default reposController
