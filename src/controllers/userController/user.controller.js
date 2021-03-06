import * as userService from '../../services/servicesUser/user.query.js'

export async function get (req, res, next) {
  try {
    res.json(await userService.getUserBy(req.query))
  } catch (error) {
    console.error('error getting posts data', error.message)
    next(error)
  }
}

export async function create (req, res, next) {
  try {
    res.json(await userService.createUser(req.body))
  } catch (error) {
    console.error('error getting posts data', error.message)
    next(error)
  }
}
export async function update (req, res, next) {
  try {
    res.json(await userService.updateUser(req.body))
  } catch (error) {
    console.error('error getting posts data', error.message)
    next(error)
  }
}
export async function remove (req, res, next) {
  try {
    res.json(await userService.deleteUser(req.query.id))
  } catch (error) {
    console.error('error getting posts data', error.message)
    next(error)
  }
}
