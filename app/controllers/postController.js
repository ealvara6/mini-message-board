const asyncHandler = require('express-async-handler');
const db = require('../db/queries');

const getAllPosts = asyncHandler(async (req, res) => {
    const posts = await db.getAllPosts();
    res.render('index', {
        posts: posts,
        links: req.links,
    });
});

const getPost = (req, res) => {
    const links = req.links;
    const post = req.posts.find((post) => post.id == parseInt(req.params.id));
    res.render('post', {links: links, post: post });
}

const getPostForm = (req, res) => {
    const links = req.links;
    res.render('form', { links: links });
}


module.exports = {
    getPostForm,
    getPost,
    getAllPosts,
};
