const express = require('express');
const router = express.Router();

const postController = require('../controllers/postController');

router.get('/', postController.getAllPosts)

router.get('/post/new', postController.getPostForm);

router.get('/post/:id', postController.getPost)


module.exports = router;