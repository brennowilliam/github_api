import express from 'express'

const globalRouter = express.Router()

globalRouter.get('/', (req, res) => {
  res.json({ok: 'Homepage'})
})

globalRouter.get('/question', (req, res) => {
  res.json({contact: 'brennowilliam@gmail.com'})
})

export default globalRouter