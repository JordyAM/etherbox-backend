const mongoose = require("../db/connection");

const userSchema = new mongoose.Schema({
    name: String,
    avatar: String,
    comment: String,
})