const express = require('express');
const User = require('../models/User');
const router = express.Router();
const bcrypt = require('bcrypt');

router.post('/signup', async (req,res) => {
    try {
        const password = await bcrypt.hash(req.body.password, 10);
        const user = await User.create({ email, password})
        res.status(201).json(user);
    } catch (error) {
        return console.error()
    }
})

router.post('/signin', (req, res, next) => {

})

module.exports = router