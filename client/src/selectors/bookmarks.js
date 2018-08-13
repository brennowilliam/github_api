import _ from "lodash"

export default (repos, bookmarks) => {
   return _.map(bookmarks, bm => {
     return _.find(repos, repo => repo.id === bm)
   })
}