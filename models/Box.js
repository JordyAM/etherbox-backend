const mongoose = require("../db/connection");

const boxSchema = new mongoose.Schema({
    name: String,
    userCount: Number,
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
    },
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }]
});
const Box = mongoose.model("Box", boxSchema);

module.exports = Box;