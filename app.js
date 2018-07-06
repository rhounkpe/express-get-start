const express = require('express');
const app = express();
const path = require('path');


app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.send({"hello": "Hello world!"}));

app.get('/toto', function (req, res) {
    res.send('Ik ben Toto');
});

// Respoond to POST request on the root route(/); the application home page.
app.post('/', function (req, res) {
    res.send('Got a POST request!');
});

// respond to a PUT request to the /user route
app.put('/user', function (req, res) {
    res.send('Got a put request.');
});

// Respond to a DELETE request to the /user route
app.delete('/user', (req, res) => res.send('Got a delete request at /user'));

app.listen(3000, () => console.log("Connected!"));