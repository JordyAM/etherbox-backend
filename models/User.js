const mongoose = require("../db/connection");
const commentSchema = require('./Comment')
const boxSchema = require('./Box');


const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true, 
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    timestamps: true, 
    toJSON: {
        virtuals: true,
        transform: (_doc, ret) => {
            delete ret.password;
            return ret;
        },
    },
    avatar: String,
    box: [boxSchema],
    comment: [commentSchema],
})

module.exports = userSchema;