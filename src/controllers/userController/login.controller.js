import { param } from 'express/lib/request'
import connectDb from '../../services/db.connect'

export async function userLogin (req, res, next) {
  const { user, password } = req.body
  const [result] = await connectDb({ sql: 'SELECT id,password FROM users WHERE username = ?', params: user })
}
