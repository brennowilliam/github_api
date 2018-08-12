import bodyParser from "body-parser"

const setGlobalMiddleWare = app => {
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())

  app.use((req, res, next) => {
    res.status(404).send('404 - Route not found')
  })

  app.use((err,req, res, next) => {
    if (err) {
      res.status(500).send(error)
    }
  })
}

export default setGlobalMiddleWare