const mongoose = require('mongoose')
require('dotenv').config()

const POST_DB = process.env.POST_DB.replace('<password>', process.env.POST_DB_PASSWORD)
const postDBConnect = async() => {
  try {
    await mongoose.connect(POST_DB)
    console.log('POST 資料庫已連線')
  } catch {
    console.error('POST 資料庫無法連線')
  }
}

module.exports = postDBConnect