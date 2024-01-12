
const mongoose = require("mongoose")

const PostalSchema = new mongoose.Schema({
    state: String,
    city: String,
    zip: Number
})

const PostalMode = mongoose.model("/postals", PostalSchema)
module.exports = PostalMode