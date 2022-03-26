const connectDb = require('../db.connect.js')
/**
 *
 * @param {*} param0
 * @returns
 */
async function getPost(id) {
  const result = await connectDb({
    sql: 'SELECT id,id_user,img,tittle,shortdesc,description,likes,datePublish,visible FROM posts WHERE id=?',
    params: id,
  })
  return result
}
async function getAllPosts() {
  const result = await connectDb({
    sql: 'SELECT id,id_user,img,tittle,shortdesc,description,likes,datePublish,visible FROM posts',
  })
  return result
}
/**
 *
 * @param {*} param0
 * @returns
 */
async function createPost({ img, tittle, description, likes, visible }) {
  const result = await connectDb({
    sql: `INSERT INTO posts (img, tittle, description,likes, visible) 
              VALUES (?,?,?,?,?)`,
    params: [img, tittle, description, likes, visible],
  })
  return result
}
/**
 *
 * @param {*} id
 * @returns
 */
async function deletePost(id) {
  const result = await connectDb({
    sql: 'DELETE FROM posts where id=?',
    params: [id],
  })
  return result
}
/**
 *
 * @param {*} param0
 * @returns
 */
async function updatePost({
  idUser,
  img,
  tittle,
  description,
  datePublish,
  likes,
  visible,
  id,
}) {
  const result = await connectDb({
    sql: 'UPDATE posts SET idUser = ?, img = ?, tittle = ?, description = ?, datePublish = ?, likes = ?, visible = ? WHERE id = ?',
    params: [idUser, img, tittle, description, datePublish, likes, visible, id],
  })
  return result
}
module.exports = { updatePost, deletePost, createPost, getAllPosts, getPost }
