const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userDB = []

app.get('/', (req,res)=>{
    res.send(userDB);
 });

app.listen(8081);