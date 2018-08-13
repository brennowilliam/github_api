import _ from "lodash"

export default (repos, bookmarks) => {
  return _.filter(repos, repo => {
    if (_.includes(bookmarks, repo.id)) {
      return repo
    }
  })
}