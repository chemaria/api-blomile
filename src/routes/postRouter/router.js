import express from 'express'
import { getPost, getAllPosts, create, update, remove } from '../../controllers/postController/post.controller.js'

export const postRouter = express.Router()

postRouter.get('/:id', getPost)
postRouter.get('/', getAllPosts)
postRouter.post('/', create)
postRouter.put('/', update)
postRouter.delete('/', remove)
