var express = require('express');
var path = require('path');
var app = express();
var api = require("./routes/api");
//var quotes = require('../quotes');

app.use(express.static(path.join(__dirname, 'public')));
app.get('/index', function(req, res) {
    res.sendFile(__dirname+'/public/index.html');
});
app.use("/api", api);

module.exports = app;

