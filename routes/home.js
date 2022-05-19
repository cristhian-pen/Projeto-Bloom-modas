const express = require('express');
const router = express.Router();

const user = require('../App/model/model');

router.get('/', (req , res) => {
    res.render('home/index');
});

router.get('/login', (req, res) => {
    res.render('auth/sign')
});

router.post('/testelogin', (req, res) => {
    user.findAll({
        where: {
            EMAIL: req.body.nome,
            SENHA: req.body.password
        }
    }).then(() => {
        res.redirect('/bloommodas');
        console.log("Passei aqui1");
    }).catch(() => {
        res.redirect('/bloommodas/login');
        console.log("Passei aqui2");
    })
});

router.get('/cadastro', (req , res) => {
    res.render('auth/register');
});

router.get('/promocoes', (req, res) => {
    res.render('products/products');
});

router.post('/testepost', (req, res) => {
    user.create({
        NOME: req.body.nome,
        SOBRENOME: req.body.sobrenome,
        EMAIL: req.body.email,
        SEXO: req.body.select,
        SENHA: req.body.password
    });
    try {
        res.redirect('/bloommodas/login');
    } catch(erro) { 
        res.render("User not created, please try again");
        res.redirect('/cadastro');
    };
});


module.exports = router;