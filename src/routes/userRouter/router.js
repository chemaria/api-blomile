const express = require('express')
const userController = require('../../controllers/userController/user.controller.js')
const userLogin = require('../../controllers/userController/login.controller.js')
const userRouter = express.Router()
const { get, create, update, remove } = userController
const userAuth = require('../../middlewares/userAuth.js')

userRouter.get('/:id', userAuth, get)
userRouter.post('/', userAuth, create)
userRouter.post('/login', userAuth, userLogin)
userRouter.put('/', userAuth, update)
userRouter.delete('/', userAuth, remove)

module.exports = userRouter
