var express = require('express');
var path = require('path');
var logger = require('morgan');
const cors = require('cors');


var discoverRouter = require('./routes/discovery');
var searchRouter = require('./routes/search');

var app = express();

// Serve files from the React app
app.use(express.static(path.join(__dirname, '/client/build')));

// Anything that doesn't match the above, send back index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '../client/build/index.html'))
})


app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('api/discover', discoverRouter);
app.use('api/search', searchRouter);

const port = process.env.PORT || 8000;
app.listen(port);

module.exports = app;
