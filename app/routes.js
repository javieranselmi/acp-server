let dots = require("dot").process({
    path: (__dirname + "/templates")
});

const express = require('express');
const Router = express.Router();

// google API

Router.get('/templates/:template', function(req,res) {
    res.send(dots.hello({
        name: req.params.template
    }));
});

exports = module.exports = Router;