
const db  = require("mongoose")


const AuthenticationSchema = new db.Schema({
    name: String,
    email: String,
    file: String,
    password: String
})
const AuthenticationModel = db.model("/register", AuthenticationSchema)
module.exports = AuthenticationModel