const express = require('express');
const app = express();
const path = require('path');
const assetpath = path.join(__dirname, 'public');
const date = new Date();

const messages = [
    {
        message: 'Hi there!',
        user: 'Amando',
        added: date.toLocaleDateString('en-US')
    },
    {
        message: 'Hello World!',
        user: 'Charles',
        added: date.toLocaleDateString('en-US')
    }
];

const links = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'New Post',
        link: '/new'
    }
];

app.use(express.urlencoded({ extended: true }));
app.use(express.static(assetpath));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { messages: messages, links: links });
});

app.get('/new', (req, res) => {
    res.render('form');
});
app.post('/new', (req, res) => {
    messages.push(req.body);
    res.redirect('/');
});

app.listen(8080);