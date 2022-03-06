import express from 'express'
import * as userController from '../../controllers/userController/user.controller'

export const router = express.Router()

router.get('/user/:id', userController.get)
// list all users?
// router.get('/user/', userController.)
router.post('/user', userController.create)
router.put('/user', userController.update)
router.delete('/user', userController.remove)
