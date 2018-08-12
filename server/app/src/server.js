// Libs
import express from 'express'

// Utils
import setupMiddleware from "./configMiddleware"
import setupRouters from "./configRouters"

const app = express()

setupMiddleware(app)
setupRouters(app)

app.use((req, res, next) => {
  res.status(404).send('404 - Route not found')
})

export default app
