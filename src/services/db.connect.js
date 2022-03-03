const mysql = require("mysql2/promise");
const configDb = require("../configs/config.db");
try {
  async function query({ sql, params }) {
    const connection = await mysql.createConnection({
      host: configDb.host,
      user: configDb.user,
      password: configDb.password,
      database: configDb.database,
      port: configDb.port,
    });
    const [result] = await connection.query(sql, params);
    return result;
  }
} catch (error) {
  console.log(error);
}

module.exports = query;
