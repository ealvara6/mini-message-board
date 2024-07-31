const express = require('express');
const router = express.Router();

const postController = require('../controllers/postController');

router.get('/new', postController.getPostForm);

router.get('/:id', (req, res) => {
    res.send('this message was sent');
});


module.exports = router;