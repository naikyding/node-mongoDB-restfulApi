const bufferHandler = async(req) => {
  let buffers = []
  for await(const buffer of req){
    buffers.push(buffer)
  }
  return JSON.parse(Buffer.concat(buffers).toString())
}

module.exports = {
  bufferHandler
}