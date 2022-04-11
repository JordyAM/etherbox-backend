const mongoose = require("../db/connection");
const userSchema = require("./User");

const boxSchema = new mongoose.Schema({
    name: String,
    userCount: Number,
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
    },
    user: [userSchema],
});
const Box = mongoose.model("Box", boxSchema);

module.exports = Box;