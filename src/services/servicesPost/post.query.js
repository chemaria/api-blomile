import connectDb from '../db.connect'
/**
 *
 * @param {*} param0
 * @returns
 */
export async function getPost ({ numberPost = 1 }) {
  const query =
    numberPost === 1
      ? 'SELECT id,id_user,img,tittle,shortdesc,description,likes,datePublish,visible FROM posts'
      : 'SELECT id,id_user,img,tittle,shortdesc,description,likes,datePublish,visible FROM posts ORDER BY datePublish LIMIT 1'
  try {
    const result = await connectDb({ sql: query })
    return result
  } catch (error) {
    console.log(error)
  }
}
/**
 *
 * @param {*} param0
 * @returns
 */
export async function createPost ({ idUser, img, tittle, description, datePublish, likes, visible }) {
  try {
    const result = await connectDb(
      {
        sql: `INSERT INTO posts (id_user, img, tittle, description, datePublish,likes, visible) 
              VALUES (?,?,?,?,?,?,?,?)`,
        params: [idUser, img, tittle, tittle, description, datePublish, likes, visible]
      }
    )
    return result
  } catch (error) {
    console.log(error)
  }
}
/**
 *
 * @param {*} id
 * @returns
 */
export async function deletePost (id) {
  try {
    const result = await connectDb({ sql: 'DELETE FROM posts where id=?', params: [id] })
    return result
  } catch (error) {
    console.log(error)
  }
}
/**
 *
 * @param {*} param0
 * @returns
 */
export async function updatePost ({ posts }) {
  try {
    const result = await connectDb(
      {
        sql: 'UPDATE posts SET idUser = ?, img = ?, tittle = ?, description = ?, datePublish = ?, likes = ?, visible = ? WHERE id = ?',
        params: [posts.idUser, posts.img, posts.tittle, posts.description, posts.datePublish, posts.likes, posts.visible, posts.id]
      })
    return result
  } catch (error) {
    console.log(error)
  }
}
