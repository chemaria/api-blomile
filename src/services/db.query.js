import query from './db.connect'
/**
 *
 * @param {*} page
 */
async function getPost ({ page = 1, numberPost = 0 }) {
  const query = (numberPost === 0)
    ? 'SELECT id,id_user,img,tittle,shortdesc,description,likes,datePublish,visible FROM posts'
    : 'SELECT id,id_user,img,tittle,shortdesc,description,likes,datePublish,visible FROM posts ORDER BY datePublish LIMIT 1'
  const result = await query({ sql: query })
  return result
}
