// Libs
import express from 'express'
// Routers
import { globalRouter } from './routers/globalRouter'
import { apiRouter } from './routers/apiRouter'

// setupMiddleware(app)
const app = express()

app.use(globalRouter)
app.use(apiRouter)

app.use((req, res, next) => {
  res.status(404).send('404 - Route not found')
})

export default app
