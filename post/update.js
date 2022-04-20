const Post = require("../model/post")
const { errorHandler, successHandler } = require("../responseHandler")
const { bufferHandler } = require("../utils")
const { getHandler } = require("./get")

const updateItem = async(req, res) => {
  try {
    const id = req.url.split("/").pop()
    const findId = await Post.findById(id)
    if(!findId) throw {}
    const body = await bufferHandler(req)
    await Post.findByIdAndUpdate(id, body)
    const list = await getHandler()
    successHandler({res, data: list})
  } catch({errors}) {
    errorHandler({res, errors})
  }
}

module.exports = updateItem