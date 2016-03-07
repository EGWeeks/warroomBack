'use strict';

var express = require('express');
var router = express.Router();

var warroom = require("../warroom-client");


/* GET home page. */
router.get('/', function(req, res) {
  warroom(function(data) {
  	res.send(data);
  });

});

module.exports = router;
