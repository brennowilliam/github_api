// Libs
import express from 'express'
import bodyParser from "body-parser"

// Utils
import setupMiddleware from "./configMiddleware"
import setupRouters from "./configRouters"

// Routers
import { globalRouter } from './routers/globalRouter'
import { apiRouter } from './routers/apiRouter'

// Fake a persistent storage for the bookmarks.
const bookmarks = []

const app = express()

setupMiddleware(app)
setupRouters(app)

app.use((req, res, next) => {
  res.status(404).send('404 - Route not found')
})

export default app
