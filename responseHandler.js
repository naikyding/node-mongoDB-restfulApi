const headers = require('./headers')

const successHandler = ({
  res,
  statusCode = 200,
  status = 'Success',
  message = '操作成功',
  data = []
}) => {
  res.writeHead(statusCode, headers)
  res.end(JSON.stringify({
    status,
    message,
    data
  }))
}

const errorMessageHandler = (errors) => 
  Object.values(errors).reduce((acc, cur) => {
    return acc = [...acc, cur.message]
  }, [])


const errorHandler = ({
  res,
  statusCode = 400,
  status = 'Error',
  message = '操作失敗，資料錯誤',
  errors = []
}) => {
  res.writeHead(statusCode, headers)
  res.end(JSON.stringify({
    status,
    message,
    errors: errorMessageHandler(errors)
  }))
}

module.exports = {
  successHandler,
  errorHandler,
}