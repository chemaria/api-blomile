import express from 'express'
import * as postController from '../../controllers/postController/post.controller.js'

export const postRouter = express.Router()

postRouter.get('/:id', postController.getPost)
postRouter.get('/', postController.getAllPosts)
postRouter.post('/', postController.create)
postRouter.put('/', postController.update)
postRouter.delete('/', postController.remove)
