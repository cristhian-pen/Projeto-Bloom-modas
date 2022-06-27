const express = require('express');
const routerauth = express.Router();
const passport = require('passport');

routerauth.get('/', (req, res) => {
    res.render('auth/sign');
});

routerauth.post('/signauth', passport.authenticate('local', {
    successRedirect: '/bloommodas',
    failureRedirect: '/auth'
}));

module.exports = routerauth;