const Post = require('../model/post')
const {
  successHandler,
  errorHandler,
} = require('../responseHandler')

const getHandler = async(model = Post) => {
  try {
    const postList = await model.find()
    return postList
  } catch(error) {
    console.error(error)
  }
}

const getList = async(res) => {
  try {
    const list = await getHandler()
    successHandler({res, data: list})
  } catch(errors) {
    errorHandler({res, errors})
  }
}

module.exports = {
  getList,
  getHandler,
}