import 'dotenv/config.js'

const env = process.env
export const generalConfig = {
  jwt_secret: env.JWT_SECRET_KEY
}
