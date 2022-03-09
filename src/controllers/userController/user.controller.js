const userService = require('../../services/servicesUser/user.query.js') 

async function get (req, res, next) {
  try {
    res.json(await userService.getUserBy(req.query))
  } catch (error) {
    console.error('error getting posts data', error.message)
    next(error)
  }
}
async function create (req, res, next) {
  try {
    res.json(await userService.createUser(req.body))
  } catch (error) {
    console.error('error getting posts data', error.message)
    next(error)
  }
}
async function update (req, res, next) {
  try {
    res.json(await userService.updateUser(req.body))
  } catch (error) {
    console.error('error getting posts data', error.message)
    next(error)
  }
}
async function remove (req, res, next) {
  try {
    res.json(await userService.deleteUser(req.query.id))
  } catch (error) {
    console.error('error getting posts data', error.message)
    next(error)
  }
}
 module.exports = {remove,update,create,get}