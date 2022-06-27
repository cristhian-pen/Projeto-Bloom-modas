const express = require('express');
const buyrouter = express.Router();

const user = require('../App/model/model');

buyrouter.get('/', (req, res) => {
    res.render('buycar/buycar');
});

module.exports = buyrouter;