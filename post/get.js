const headers = require('../headers')

const getList = async(res) => {
  res.writeHead(200, headers)
  res.end('一一')
}

const getHandler = async(res) => {

}

module.exports = {
  getList,
  getHandler,
}