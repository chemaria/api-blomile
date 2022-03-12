const express = require('express')
const userRouter = require('./src/routes/userRouter/router.js')
const postRouter = require('./src/routes/postRouter/router.js')
// const errorHadler = require('./middleware/errorHadler.js')
const cors = require('cors')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const app = express()
const port = 3002

app.use(helmet())
app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
  })
)
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.use('/user', userRouter)
app.use('/post', postRouter)
// app.use(errorHadler)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`blomail ${port}`)
})
