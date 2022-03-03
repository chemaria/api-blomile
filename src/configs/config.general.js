require('dotenv').config({ path: "../../.env.local" })
const env= process.env
const generalConfig = {
  jwt_secret : env.JWT_SECRET_KEY,
  jwt_cookie_expires : env.JWT_COOKIE_EXPIRES,
  jwt_time_live = env.JWT_TIME_TO_LIVE
}