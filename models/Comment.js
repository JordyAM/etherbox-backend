const mongoose = require('../db/connection');


const commentSchema = new mongoose.Schema({
    message: String,
})

module.exports = commentSchema;