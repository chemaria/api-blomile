import * as postService from '../../services/servicesPost/post.query'

export async function get (req, res, next) {
  try {
    res.json(postService.getPost(req.query.id))
  } catch (error) {
    console.error('error getting posts data', error.message)
    next(error)
  }
}

export async function create (req, res, next) {
  try {
    res.json(postService.createPost(req.body))
  } catch (error) {
    console.error('error getting posts data', error.message)
    next(error)
  }
}
export async function update (req, res, next) {
  try {
    res.json(postService.updatePost(req.body))
  } catch (error) {
    console.error('error getting posts data', error.message)
    next(error)
  }
}
export async function remove (req, res, next) {
  try {
    res.json(postService.deletePost(req.query.id))
  } catch (error) {
    console.error('error getting posts data', error.message)
    next(error)
  }
}
