const connectDb = require('../../services/db.connect.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const generalConfig = require('../../configs/config.general.js')

async function userLogin(req, res, next) {
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

  const jwtData = {
    userData: {
      username: user,
      id: result.id,
    },
    tokenExpires: { expiresIn: '30d' },
    cookieOptions: {
      maxAge: 60 * 60 * 24 * 7,
      domain: 'blomile.com',
      secure: true,
    },
  }
  const token = await jwt.sign(
    jwtData.userData,
    generalConfig.jwt_secret,
    jwtData.tokenExpires
  )

  // res.setHeader(
  //   'Set-Cookie',
  //   cookie.serialize('jwt', token, jwtData.cookieOptions)
  // )
  res.cookie('jwt', token, jwtData.cookieOptions)

  res.status(201).send('ok login')
  console.log(token)
}

module.exports = userLogin
