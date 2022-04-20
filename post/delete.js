const Post = require('../model/post')
const { errorHandler, successHandler } = require('../responseHandler')
const { getHandler } = require('./get')

const deleteItem = async(req, res) => {
  try {
    const id = req.url.split('/').pop()
    const findId = await Post.findById(id)
    if(!findId) throw {}
    await Post.findByIdAndDelete(id)
    const list = await getHandler()
    successHandler({res, data: list})
  } catch({errors}) {
    errorHandler({res, errors})
  }
}

const deleteList = async(res) => {
  try {
    await Post.deleteMany({})
    const list = await getHandler()
    successHandler({res, data: list})
  } catch({errors}) {
    errorHandler({res, errors})
  }
}

module.exports = {
  deleteItem,
  deleteList,
} 

