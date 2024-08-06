const express = require('express');
const app = express();
const path = require('path');
const assetpath = path.join(__dirname, 'public');
require('dotenv').config();

const postRouter = require('./routes/postRoutes');

const date = new Date();
let id = 0;

const posts = [
    {
        id: id++,
        post: 'Hi there!',
        user: 'Amando',
        added: date.toLocaleDateString('en-US'),
        emptypost: false
    },
    {
        id: id++,
        post: 'Hello World!',
        user: 'Charles',
        added: date.toLocaleDateString('en-US'),
        emptypost: false
    }
];

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


app.get('/', (req, res) => {
    res.render('index', { posts: posts, links: links });
});

app.post('/new', (req, res) => {
    console.log(req.body);
    addPost(req.body);
    res.redirect('/');
});

app.use('/post', (req, res, next) => {
    req.links = links;
    req.posts = posts;
    next();
}, postRouter);



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