'use strict';

var express = require('express');
// var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var routes = require('./routes/index');

var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

if (app.get('env') === 'development') {
  app.use(function(err, req, res) {
    res.status(err.status || 500);
    res.send({
      message: err.message,
      error: err
    });
  });
}

app.use(function(err, req, res) {
  res.status(err.status || 500);
  res.render({
    message: err.message,
    error: {}
  });
});


module.exports = app;
