const mongoose = require("../db/connection");
const commentSchema = require('./Comment')


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
    avatar: String,
},
    {
    timestamps: true, 
    toJSON: {
        virtuals: true,
        transform: (_doc, ret) => {
            delete ret.password;
            return ret;
        }
    }
    }
    
)
const User = mongoose.model('User', userSchema)

module.exports = User;