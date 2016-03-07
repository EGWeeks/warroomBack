'use strict';

var express = require('express');
var router = express.Router();

var warroom = require("../warroom-client");


/* GET home page. */
router.get('/', function(req, res) {
  warroom(function(data) {
  	res.json(data);
  });

});

/* GET BY array index */
router.get('/:id', function(req, res) {
  warroom(function(data) {
  	res.json(data.data[req.params.id]);
  });

});

module.exports = router;
