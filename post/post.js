const { bufferHandler } = require('../utils')
const { getHandler } = require('./get')
const {
  successHandler,
  errorHandler,
} = require('../responseHandler')
const Post = require('../model/post')

const postItem = async(req, res) => {
  try {
    const body = await bufferHandler(req)
    await Post.create(body)
    const list = await getHandler()
    successHandler({res, data: list})
  } catch({errors})  {
    errorHandler({res, errors})
  }
}

module.exports = postItem