import express from 'express'
import * as postController from '../../controllers/postController/post.controller'

export const router = express.Router()

router.get('/post/:id', postController.getPost)
router.get('/post/', postController.getAllPosts)
router.post('/post', postController.create)
router.put('/post', postController.update)
router.delete('/post', postController.remove)
