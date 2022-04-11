const connectDb = require('../../services/db.connect.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const generalConfig = require('../../configs/config.general.js')
const configEnv = require('../../configs/config.general.js')

async function userLogin(req, res) {
  const { user, password } = req.body
  if (!(user && password)) {
    return res.status(401).json('error invalid user or password')
  }

  const [result] = await connectDb({
    sql: 'SELECT id,password FROM users WHERE username = ?',
    params: user,
  })
  if (!result) {
    return res.status(401).json('error invalid user or password')
  }

  const passCompare = await bcrypt.compare(password, result.password)
  if (!passCompare) {
    return res.status(401).json('error invalid user or password')
  }

  const __ORIGIN__ =
    configEnv.node_env === 'development' ? 'localhost' : 'blomile.com'

  const jwtData = {
    userData: {
      username: user,
      id: result.id,
    },
    tokenExpires: { expiresIn: '30d' },
    cookieOptions: {
      maxAge: 14 * 24 * 60 * 60 * 1000,
      domain: __ORIGIN__,
      secure: true,
      httpOnly: false,
      sameSite: 'none',
    },
  }
  const token = await jwt.sign(
    jwtData.userData,
    generalConfig.jwt_secret,
    jwtData.tokenExpires
  )
  res.cookie('jwt', token, jwtData.cookieOptions).send('ok')
}

module.exports = userLogin
