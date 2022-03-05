import connectDb from '../db.connect'
/**
 *
 * @param {*} param0
 * @returns
 */
export async function getPost (id = null) {
  const query =
    !id
      ? 'SELECT id,id_user,img,tittle,shortdesc,description,likes,datePublish,visible FROM posts ORDER BY datePublish'
      : 'SELECT id,id_user,img,tittle,shortdesc,description,likes,datePublish,visible FROM posts WHERE id= ?'

  const result = await connectDb({ sql: query, params: id })
  return result
}
/**
 *
 * @param {*} param0
 * @returns
 */
export async function createPost ({ idUser, img, tittle, description, datePublish, likes, visible }) {
  const result = await connectDb(
    {
      sql: `INSERT INTO posts (id_user, img, tittle, description, datePublish,likes, visible) 
              VALUES (?,?,?,?,?,?,?,?)`,
      params: [idUser, img, tittle, tittle, description, datePublish, likes, visible]
    }
  )
  return result
}
/**
 *
 * @param {*} id
 * @returns
 */
export async function deletePost (id) {
  const result = await connectDb({ sql: 'DELETE FROM posts where id=?', params: [id] })
  return result
}
/**
 *
 * @param {*} param0
 * @returns
 */
export async function updatePost ({ idUser, img, tittle, description, datePublish, likes, visible, id }) {
  const result = await connectDb(
    {
      sql: 'UPDATE posts SET idUser = ?, img = ?, tittle = ?, description = ?, datePublish = ?, likes = ?, visible = ? WHERE id = ?',
      params: [idUser, img, tittle, description, datePublish, likes, visible, id]
    })
  return result
}
