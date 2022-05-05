const jwt = require('jsonwebtoken')
const config = require('../configs/config.general')

module.exports = async (req, res, next) => {
  const authorization = req.get('authorization')
  let token = null
  let decodedToken = null
  if (authorization && authorization.toLowerCase().startsWith('bearer')) {
    token = authorization.substring(7)
  }

  try {
    decodedToken = await jwt.verify(token, config.jwt_secret)
  } catch (error) {
    return res.status(401).json({ error: 'token missing or invalid' })
  }

  if (!token || !decodedToken.id) {
    return res.status(401).json({ error: 'token missing or invalid' })
  }
  next()
}
