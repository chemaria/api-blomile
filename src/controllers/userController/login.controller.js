import connectDb from '../../services/db.connect.js'
import bcrypt from 'bcrypt'

export default async function userLogin (req, res, next) {
  const { user, password } = req.body
  const [result] = await connectDb({ sql: 'SELECT id,password FROM users WHERE username = ?', params: user })
  console.log(result)
}
