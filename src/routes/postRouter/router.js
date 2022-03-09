const express = require('express')
const postController = require('../../controllers/postController/post.controller.js')
const { get, getAll, create, update, remove } = postController
const postRouter = express.Router()

postRouter.get('/:id', get)
postRouter.get('/', getAll)
postRouter.post('/', create)
postRouter.put('/', update)
postRouter.delete('/', remove)

module.exports = postRouter
