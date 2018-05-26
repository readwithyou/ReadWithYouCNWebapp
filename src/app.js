const express = require('express');

var app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.get('/', require('./routes').index);

module.exports = app;