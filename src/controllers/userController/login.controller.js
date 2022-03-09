import connectDb from '../../services/db.connect.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { generalConfig } from '../../configs/config.general.js'
import cookie from 'cookie'

export default async function userLogin (req, res, next) {
  const { user, password } = req.body
  if (!(user && password)) { return res.status(401).json('error invalid user or password') }

  const [result] = await connectDb({
    sql: 'SELECT id,password FROM users WHERE username = ?',
    params: user
  })
  if (!result) { return res.status(401).json('error invalid user or password') }

  const passCompare = await bcrypt.compare(password, result.password)
  if (!passCompare) { return res.status(401).json('error invalid user or password') }

  const jwtData = {
    userData: {
      username: user,
      id: result.id
    },
    tokenExpires: { expiresIn: '30d' },
    cookieOptions: {
      maxAge: 60 * 60 * 24 * 7,
      domain: 'http://localhost:3000'
    }
  }
  const token = await jwt.sign(jwtData.userData, generalConfig.jwt_secret, jwtData.tokenExpires)

  res.setHeader('Set-Cookie', cookie.serialize('jwt', token, jwtData.cookieOptions))
  res.status(201).send('ok login')
  res.end()
}
