const asyncHandler = require('express-async-handler');
const db = require('../db/queries');

class CustomNotFoundError extends Error {
    constructor(message) {
        super(message);
        this.statusCode = 404;
        this.name = 'NotFoundError';
    }
}

const getAllPosts = asyncHandler(async (req, res) => {
    const posts = await db.getAllPosts();
    res.render('index', {
        posts: posts,
        links: req.links,
    });
});

const getPost = asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    if (!Number.isInteger(id)) {
        throw new CustomNotFoundError('User not found');
    }
    const post = await db.getPost(id);
    console.log(post);
    res.render('post', {links: req.links, post: post });
});

const getPostForm = (req, res) => {
    res.render('form', { links: req.links });[]
}

const postPostForm = asyncHandler(async (req, res) => {
    const { username, post } = req.body;
    await db.insertPost(username, post);
    res.redirect('/');
})


module.exports = {
    getPostForm,
    getPost,
    getAllPosts,
    postPostForm,
};
