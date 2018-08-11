import bodyParser from "body-parser"

const setGlobalMiddleWare = app => {
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())
}

export default setGlobalMiddleWare