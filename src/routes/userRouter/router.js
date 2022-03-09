const express = require('express')
const userController = require('../../controllers/userController/user.controller.js')
const userLogin = require('../../controllers/userController/login.controller.js')
const userRouter = express.Router()
const { get, create, update, remove } = userController

userRouter.get('/:id', get)
// list all users?
// router.get('/user/', userController.)
userRouter.post('/', create)
userRouter.post('/login', userLogin)
userRouter.put('/', update)
userRouter.delete('/', remove)

module.exports = userRouter
