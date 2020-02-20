const express = require('express');
const app = express();
const fetch = require('node-fetch');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('views', `${__dirname}/views`);
app.set('view engine', 'hbs');

const apiServer = 'http://localhost:8081';

app.get('/', (req, res) => {
    res.render('index', {
        subject: 'index'
    });
    fetch(apiServer)
        .then(res => res.text())
        .then(body => console.log(body));
});

app.listen(8080);
