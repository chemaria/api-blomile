const express = require('express')
const postController = require('../../controllers/postController/post.controller.js')
const { get, getAll, create, update, remove } = postController
const postRouter = express.Router()
const userAuth = require('../../middlewares/userAuth.js')
const uploadImage = require('../../middlewares/imgProcessing.js')

postRouter.get('/:id', get)
postRouter.get('/', getAll)
// postRouter.post('/', userAuth, create)
postRouter.post('/', create)
postRouter.put('/', userAuth, update)
postRouter.delete('/', userAuth, remove)

module.exports = postRouter
