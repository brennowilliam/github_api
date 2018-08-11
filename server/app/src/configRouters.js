import globalRouter from "./routers/globalRouter"
import apiRouter from "./routers/apiRouter"

const setUpRouters = app => {
  app.use(globalRouter)
  app.use(apiRouter)
}

export default setUpRouters