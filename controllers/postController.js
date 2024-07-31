const getPostForm = (req, res) => {
    links = req.links;
    res.render('form', { links: links});
}

module.exports = {
    getPostForm,
};
