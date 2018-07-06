const express = require('express');
const app = express();

app.get('/', (req, res) => res.send({"hello": "Hello world!"}));

app.get('/toto', function (req, res) {
    res.send('Ik ben Toto');
});

app.listen(3000, () => console.log("Connected!"));