const express = require('express');
const app = express();
const fetch = require('node-fetch');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const dataJSON = {title:'hello world'}
app.get('/', (req, res) => {
    res.json(dataJSON);
});
app.listen(8081);
