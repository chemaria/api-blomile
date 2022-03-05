import dotenv from 'dotenv'
dotenv.config({ path: '../../.env.local' })

const env = process.env
export const configDb = {
  host: env.MYSQL_IP,
  user: env.MYSQL_USER,
  password: env.MYSQL_PASSWORD,
  database: env.MYSQL_DB,
  port: env.MYSQL_PORT
}
console.log(configDb)
