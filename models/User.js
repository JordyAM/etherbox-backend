const mongoose = require("../db/connection");
const commentSchema = require('')

const userSchema = new mongoose.Schema({
    name: String,
    avatar: String,
    comment: [commentSchema],
})

module.exports = userSchema;