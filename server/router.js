const express = require('express');
const router = express.Router();

const Message = require('./Message');

router.get('/chats', (req, res, next) => {
    // res.send('hello')
    Message.find({})
    .then(msg => res.json(msg))
    .catch(next)
})

router.post('/chats', (req, res, next) => {
    // res.send('hello')
    Message.create(req.body)
    .then(msg => res.json(msg))
    .catch(next)
})

module.exports = router;