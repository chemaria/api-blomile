const connectDb = require('../db.connect.js')
/**
 *
 * @param {*} id
 * @returns
 */
async function getUserBy (userby) {
  const query = {
    id: 'SELECT username, role, password FROM users WHERE id = ?',
    username: 'SELECT id, password, role FROM users WHERE username = ?'
  }

  const result = await connectDb({ sql: query[userby], params: userby })
  return result
}
/**
 *
 * @param {*} param0
 * @returns
 */
async function createUser ({ username, password, role, avatar }) {
  const result = await connectDb(
    {
      sql: `INSERT INTO users (username, password, role, avatar) 
              VALUES (?,?,?,?,?,?,?,?)`,
      params: [username, password, role, avatar]
    }
  )
  return result
}
/**
 *
 * @param {*} id
 * @returns
 */
async function deleteUser (id) {
  const result = await connectDb({ sql: 'DELETE FROM users where id=?', params: [id] })
  return result
}
/**
 *
 * @param {*} param0
 * @returns
 */
async function updateUser ({ username, password, role, avatar, id }) {
  const result = await connectDb(
    {
      sql: 'UPDATE users SET username = ?, password = ?, role = ?, avatar = ? WHERE id = ?',
      params: [username, password, role, avatar, id]
    })
  return result
}
module.exports = { updateUser, deleteUser, createUser, getUserBy }
