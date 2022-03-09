import 'dotenv/config.js'

export const configDb = {
  host: process.env.MYSQL_IP,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  port: process.env.MYSQL_PORT
}
