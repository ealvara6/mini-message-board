const express = require('express');
const app = express();
const path = require('path');
const assetpath = path.join(__dirname, 'public');
require('dotenv').config();

const postRouter = require('./routes/postRoutes');

const links = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'New Post',
        link: '/post/new'
    }
];

const addPost = (body) => {
    const newEntry = body;
    newEntry.id = id++;
    if(newEntry.post === '') {
        newEntry.emptypost = true;
    } else {
        newEntry.emptypost = false;
    }
    newEntry.added = date.toLocaleDateString('en-US');

    posts.push(newEntry);
}

app.use(express.urlencoded({ extended: true }));
app.use(express.static(assetpath));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use('/', (req, res, next) => {
    req.links = links;
    next();
}, postRouter);

app.post('/new', (req, res) => {
    console.log(req.body);
    addPost(req.body);
    res.redirect('/');
});




app.use((req, res, next) => {
    res.status(404);
    res.render('404-page', { links: links });
});

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send(err);
});

const PORT = process.env.PORT;
app.listen(PORT || 3000, () => { console.log(`Express app listening on port: ${PORT}`)});