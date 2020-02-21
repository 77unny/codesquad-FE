const express = require('express');
const app = express();
const fetch = require('node-fetch');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('views', `${__dirname}/views`);
app.set('view engine', 'hbs');

const apiServer = 'http://localhost:8081/';
const apiData = fetch(apiServer)
        .then(res => res.text())
        .then(body => JSON.parse(body));

app.get('/', (req, res) => {
    res.render('index', {
        subject: 'index'
    });
    
});

app.listen(8080);
