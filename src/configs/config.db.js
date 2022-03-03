require("dotenv").config({ path: "../../.env.local" });
const env = process.env;
const db = {
  host: env.MYSQL_IP,
  user: env.MYSQL_USER,
  password: env.MYSQL_PASSWORD,
  database: env.MYSQL_DB,
  port: env.MYSQL_PORT,
};
console.log(db);
module.exports = db;
