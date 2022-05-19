const Sequelize = require('sequelize');
const db = require('../config/config_db');

const user = db.define('users', {

    CD_USUARIO: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: true,
        primaryKey: true,
    },
    NOME: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    SOBRENOME: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    EMAIL: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    SEXO: {
        type: Sequelize.CHAR,
        allowNull: false,
    },
    SENHA: {
        type: Sequelize.STRING,
        allowNull: true,
    }
});

    //user.sync();

    module.exports = user;