const express = require('express');
const app = module.exports = express.Router();
const path = require('path');

const jwtAuth = require('./lib/JWT-Auth/index');


app.use(express.static(__dirname + '/../bundle/'));

app.get('/signup', jwtAuth.signup, (req, res, next) => {
    res.send(req.user);
    next();
});

app.get('/signin', jwtAuth.signin, (req,res,next) => {
    res.send(req.user);
    next();
});

app.get('/logout', jwtAuth.logout, (req, res, next) => {
    res.send(req.user);
    next();
});

app.get('/update', jwtAuth.update, (req, res, next) => {
    res.send(req.user);
    next();
})
