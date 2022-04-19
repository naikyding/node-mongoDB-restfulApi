const { createServer } = require('http')
const requestListener = require('./requestListener')
const server = createServer(requestListener)
server.listen(process.env.PORT || 3005)