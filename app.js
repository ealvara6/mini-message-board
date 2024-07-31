const express = require('express');
const app = express();
const path = require('path');
const assetpath = path.join(__dirname, 'public');
const date = new Date();

const messages = [
    {
        message: 'Hi there!',
        user: 'Amando',
        added: date.toLocaleDateString('en-US'),
        emptyMessage: false
    },
    {
        message: 'Hello World!',
        user: 'Charles',
        added: date.toLocaleDateString('en-US'),
        emptyMessage: false
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
    res.render('form', {links: links});
});
app.post('/new', (req, res) => {
    const newEntry = req.body;
    if(newEntry.message === '') {
        newEntry.emptyMessage = true;
    } else {
        newEntry.emptyMessage = false;
    }
    newEntry.added = date.toLocaleDateString('en-US');

    messages.push(req.body);
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

app.listen(8080);