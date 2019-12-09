const mongoose = require('mongoose')
const Schema = mongoose.Schema

let userSchema = new Schema({
    first: { type: string, required: true },
    last: { type: string, required: true },
    email: { type: string, required: true },
    password: { type: string, required: true },
    isActive: { type: boolean, default: true },
    createdOn: { type: Date, default: Date.now },
})

const User = mongoose.model('User', userSchema)

module.exports = User
