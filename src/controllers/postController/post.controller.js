import * as postService from '../../services/servicesPost/post.query.js'

export async function getPost (req, res, next) {
  try {
    res.json(await postService.getPost(req.query.id))
  } catch (error) {
    console.error('error getting posts data', error.message)
    next(error)
  }
}
export async function getAllPosts (req, res, next) {
  try {
    res.json(await postService.getAllPosts())
  } catch (error) {
    console.error('error getting posts data', error.message)
    next(error)
  }
}
export async function create (req, res, next) {
  try {
    res.json(await postService.createPost(req.body))
  } catch (error) {
    console.error('error getting posts data', error.message)
    next(error)
  }
}
export async function update (req, res, next) {
  try {
    res.json(await postService.updatePost(req.body))
  } catch (error) {
    console.error('error getting posts data', error.message)
    next(error)
  }
}
export async function remove (req, res, next) {
  try {
    res.json(await postService.deletePost(req.query.id))
  } catch (error) {
    console.error('error getting posts data', error.message)
    next(error)
  }
}
