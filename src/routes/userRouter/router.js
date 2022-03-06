import express from 'express'
import * as userController from '../../controllers/userController/user.controller.js'

export const userRouter = express.Router()

userRouter.get('/:id', userController.get)
// list all users?
// router.get('/user/', userController.)
userRouter.post('/', userController.create)
userRouter.post('/login', userController.login)
userRouter.put('/', userController.update)
userRouter.delete('/', userController.remove)
