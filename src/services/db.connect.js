import mysql2 from 'mysql2/promise'
import { configDb } from '../configs/config.db.js'

export default async function connectDb ({ sql, params = [] }) {
  try {
    const connection = await mysql2.createConnection({
      host: configDb.host,
      user: configDb.user,
      password: configDb.password,
      database: configDb.database,
      port: configDb.port
    })
    const [result] = await connection.query(sql, params)
    return result
  } catch (error) {
    console.log(error)
  }
}
