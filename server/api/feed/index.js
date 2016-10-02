'use strict';

var express = require('express');
var controller = require('./feed.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:page', controller.index);

module.exports = router;
