const mongoose = require('../db/connection');


const commentSchema = new mongoose.Schema({
    message: String,
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
    },
})

const Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment;