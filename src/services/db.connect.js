const mysql2 = require('mysql2/promise')
const configDb = require('../configs/config.db.js')

async function connectDb ({ sql, params = [] }) {
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

module.exports = connectDb
