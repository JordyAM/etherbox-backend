const express = require('express');
const router = express.Router();
const Box = require('../models/Box')

const Comment = require('../models/Comment');

router.post('/:boxid', (req, res) => {
    const newComment = req.body;
    Box.findById(req.params.boxid)
        .then((box) => {
            Comment.create(newComment).then((comment) => {
                box.comments.push(comment._id)
                box.save();
                return comment;
            }
        ).then(comment => res.json(comment))
    // Comment.create(req.body)
    //     .then((comment) => res.json(comment))
    //     .catch(console.error());
})
})
router.delete('/user/:id', (req, res) => {
    Comment.findOneAndDelete({
        _id: req.params.id,
    })
    .then((comment) => res.json(comment))
    .catch(console.error());
})

module.exports = router;