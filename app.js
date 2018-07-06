const express = require('express');
const app = express();
const path = require('path');

// Serve static files
app.use('/static', express.static(path.join(__dirname, 'public')));

// GET method route
app.get('/', (req, res) => res.send('GET request to the homepage!'));

app.get('/toto', function (req, res) {
    res.send('Ik ben Toto');
});

// Respoond to POST request on the root route(/); the application home page.
app.post('/', function (req, res) {
    res.send('POST request to the homepage');
});

// respond to a PUT request to the /user route
app.put('/user', function (req, res) {
    res.send('Got a put request.');
});

// Respond to a DELETE request to the /user route
app.delete('/user', (req, res) => res.send('Got a delete request at /user'));

app.all('/secret', function (req, res, next) {
    console.log('Accessing the secret section ...');
    next(); // pass control to the next handler
});


app.use((req, res, next) => res.status(404).send("Sorry can't find that resource!"));

app.use(function(err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!');
});



app.listen(3000, () => console.log("Connected!"));