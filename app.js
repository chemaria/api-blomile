const express = require('express')
const userRouter = require('./src/routes/userRouter/router.js')
const postRouter = require('./src/routes/postRouter/router.js')
// const errorHadler = require('./middleware/errorHadler.js')
const cors = require('cors')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const app = express()
const port = 3002
const configEnv = require('./src/configs/config.general')
const cookieParser = require('cookie-parser')
app.use(helmet())

const __NODE_ENV__ =
  configEnv.node_env === 'development'
    ? 'http://blomile.com:3000'
    : 'https://blomile.com'

app.use(
  cors({
    origin: __NODE_ENV__,
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
  })
)
app.use(cookieParser())
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
