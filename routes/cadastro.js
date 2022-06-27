const express = require('express');
const routercad = express.Router();

const user = require('../App/model/model');


routercad.get('/', (req, res) => {
    res.render('auth/register');
});

routercad.post('/signup', (req, res) => {
   user.create({
        NOME: req.body.nome,
        SOBRENOME: req.body.sobrenome,
        EMAIL: req.body.email,
        SEXO: req.body.select,
        SENHA: req.body.password
    });
    res.redirect('/auth');
});

module.exports = routercad