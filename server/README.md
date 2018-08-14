# Github API Backend

## How to start
1. Clone the repo: `git clone github_name`
2. `cd repo_name/server`
3. `npm install`
4. `npm run dev`

## Folder Structure

After creation, your project should look like this:

```
my-app/
  node_modules/
  app/
    config/
      config.js
      development.js
      production.js
      testing.js
    controllers/
      bookmarksController.js
      reposController.js
    routers/
      apiRouter.js
      globalRouter.js
    configMiddleware.js
    configRouter.js
    index.js
    server.js
  README.md
  package.json
  webpack.config.js
```

### API Doc

Here is a basic doc for the API

## Open Endpoints
* [Search Repo] : `GET /api/search/:term`
* [Bookmark Repo] : `POST /api/boomarks`
* [Fetch Bookmarks] : `GET /api/bookmarks`
* [Delete Bookmark] : `DELETE/api/bookmakrs/:id`