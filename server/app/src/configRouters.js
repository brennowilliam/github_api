import globalRouter from "./routers/globalRouter"
import apiRouter from "./routers/apiRouter"

const setUpRouters = app => {
  app.use(globalRouter)
  app.use('/api', apiRouter)
}

export default setUpRouters