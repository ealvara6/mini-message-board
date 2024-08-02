const getPostForm = (req, res) => {
    const links = req.links;
    res.render('form', { links: links });
}

const getPost = (req, res) => {
    const links = req.links;
    const post = req.posts.find((post) => post.id == parseInt(req.params.id));
    res.render('post', {links: links, post: post });
}

module.exports = {
    getPostForm,
    getPost,
};
