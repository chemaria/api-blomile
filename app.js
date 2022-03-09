import bodyParser from 'body-parser'
import express from 'express'
import { userRouter } from './src/routes/userRouter/router.js'
import { postRouter } from './src/routes/postRouter/router.js'
import cors from 'cors'

const app = express()
const port = 3002

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
}))
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)
app.use('/user', userRouter)
app.use('/post', postRouter)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Api Blomile listening on port ${port}`)
})
