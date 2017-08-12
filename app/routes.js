let dots = require('dot').process({
    path: (__dirname + '/templates')
});

const express = require('express');
const Router = express.Router();

// google API

Router.get('/:keyword', require('./controller/keyword-controller').applyProductFilter);

module.exports = Router;