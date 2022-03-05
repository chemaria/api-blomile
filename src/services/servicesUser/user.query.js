import connectDb from '../db.connect'
/**
 *
 * @param {*} id
 * @returns
 */
export async function getUser (id) {
  try {
    const result = await connectDb({ sql: 'SELECT username, role FROM users WHERE id=?', params: id })
    return result
  } catch (error) {
    console.log(error)
  }
}
/**
 *
 * @param {*} param0
 * @returns
 */
export async function createUser ({ username, password, role, avatar }) {
  try {
    const result = await connectDb(
      {
        sql: `INSERT INTO users (username, password, role, avatar) 
              VALUES (?,?,?,?,?,?,?,?)`,
        params: [username, password, role, avatar]
      }
    )
    return result
  } catch (error) {
    console.log(error)
  }
}
/**
 *
 * @param {*} id
 * @returns
 */
export async function deleteUser (id) {
  try {
    const result = await connectDb({ sql: 'DELETE FROM users where id=?', params: [id] })
    return result
  } catch (error) {
    console.log(error)
  }
}
/**
 *
 * @param {*} param0
 * @returns
 */
export async function updateUser ({ users }) {
  try {
    const result = await connectDb(
      {
        sql: 'UPDATE users SET username = ?, password = ?, role = ?, avatar = ? WHERE id = ?',
        params: [users.username, users.password, users.role, users.avatar, users.id]
      })
    return result
  } catch (error) {
    console.log(error)
  }
}
