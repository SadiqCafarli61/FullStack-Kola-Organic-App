const mangol = require("mongoose")

const CommentsSchema = new mangol.Schema({
  name:String,
  content: String,
  
})

const CommentsModel = mangol.model("/comments", CommentsSchema)
module.exports = CommentsModel