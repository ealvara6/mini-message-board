const express = require('express');
const app = express();
const path = require('path');
const assetpath = path.join(__dirname, 'public');

const messages = [
    {
        message: 'Hi there!',
        user: 'Amando',
        added: new Date()
    },
    {
        message: 'Hello World!',
        user: 'Charles',
        added: new Date()
    }
];

app.use(express.urlencoded({ extended: true }));
app.use(express.static(assetpath));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { messages: messages });
});

app.get('/new', (req, res) => {
    res.render('form');
});
app.post('/new', (req, res) => {
    messages.push(req.body);
    res.redirect('/');
});

app.listen(8080);