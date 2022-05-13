const express = require('express');
const router = express.Router();

const insertUser = require('../App/model/model');
const app = require('../server');

router.get('/', (req , res) => {
    res.render('home/index');
});

router.get('/login', (req, res) => {
    res.render('auth/sign')
});

router.get('/cadastro', (req , res) => {
res.render('auth/register');
});

router.get('/promocoes', (req, res) => {
    res.render('products/products');
});

router.post('/testepost', (req, res) => {
    console.log(req.body);
});

module.exports = router;