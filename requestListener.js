const headers = require('./headers')

const { getList } = require('./post/get')
const postItem = require('./post/post')
const { deleteList, deleteItem } = require('./post/delete')
const updateItem = require('./post/update')

const requestListener = async(req, res) => {
  const { url, method } = req
  if(url === '/posts' && method === 'GET') getList(res)
  else if(url === '/posts' && method === 'POST') postItem(req, res)
  else if(url === '/posts' && method === 'DELETE') deleteList(res)
  else if(url.startsWith('/posts/') && method === 'DELETE') deleteItem(req, res)
  else if(url.startsWith('/posts/') && method === 'PATCH') updateItem(req, res)
  else if(method === 'OPTIONS') {
    res.writeHead(200, headers)
    res.end()
  } else {
    res.writeHead(404, headers)
    res.end('Not found pages')
  }
}

module.exports = requestListener