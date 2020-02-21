const express = require('express');
const app = express();
const fetch = require('node-fetch');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('views', `${__dirname}/views`);
app.set('view engine', 'hbs');

const apiServer = 'http://localhost:8081/';

app.get('/', (req, res) => {
    fetch(apiServer)
        .then(res => res.text())
        .then(body => {
            res.render('index', {
                title: '아마존 Card UI 구현',
                subject: '아마존 card ui 구현하기 - node express ',
                cardNav: JSON.parse(body).navData,
                cardContents: JSON.parse(body).contentsData,
                cardBtns: JSON.parse(body).btns
            });
        });
    });

app.listen(8080);
