const postService = require('../../services/servicesPost/post.query.js')
const { updatePost, deletePost, createPost, getAllPosts, getPost } = postService
async function get (req, res, next) {
  try {
    res.json(await getPost(req.params.id))
  } catch (error) {
    console.error('error getting posts data', error.message)
    next(error)
  }
}
async function getAll (req, res, next) {
  try {
    res.json(await getAllPosts())
  } catch (error) {
    console.error('error getting posts data', error.message)
    next(error)
  }
}
async function create (req, res, next) {
  try {
    res.json(await createPost(req.body))
  } catch (error) {
    console.error('error getting posts data', error.message)
    next(error)
  }
}
async function update (req, res, next) {
  try {
    res.json(await updatePost(req.body))
  } catch (error) {
    console.error('error getting posts data', error.message)
    next(error)
  }
}
async function remove (req, res, next) {
  try {
    res.json(await deletePost(req.query.id))
  } catch (error) {
    console.error('error getting posts data', error.message)
    next(error)
  }
}

module.exports = { remove, update, create, getAll, get }
