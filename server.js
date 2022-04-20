const { createServer } = require('http')
const requestListener = require('./requestListener')
const postDBConnect = require('./DB/post')

postDBConnect()
const server = createServer(requestListener)
server.listen(process.env.PORT || 3005)