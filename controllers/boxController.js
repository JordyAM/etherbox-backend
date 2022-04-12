const express = require("express");
const router = express.Router();

const Box = require('../models/Box');

router.get('/', (req, res) => {
    Box.find().populate('comments').then((boxes) => {
        res.json(boxes);
    })
})

router.post('/', (req, res) => {
    const newBox = req.body;
    Box.create(newBox).then((boxes) => {
        res.json(boxes);
    })
})

router.get('/:id' , async (req, res) => {
    try {
        const box = await Box.findById(req.params.id).populate('comments');
        if (box) {
            res.json(box);
        } else {
            res.sendStatus(404);
        }
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;