const express = require('express');
const router = express.Router();

const postController = require('../controllers/postController');

router.get('/', postController.getAllPosts)
router.get('/post/:id', postController.getPost)
router.get('/post/new', postController.getPostForm);


module.exports = router;