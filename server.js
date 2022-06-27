var express = require("express");
var app = express();
const {engine} = require("express-handlebars");
const session = require('express-session');
var passport = require('passport');

//importacao das rotas
const home = require("./routes/home"); //importação das rotas definidas no arquivo home
const cad = require("./routes/cadastro");
const auth = require('./routes/login');
const buycar = require('./routes/buycar');

const sequelize = require('./App/config/config_db'); //importação da conexão da configuração da base de dados
const bodyParser = require('body-parser'); //biblioteca de manipulação de dados dos formularios
require('./App/controller/auth')(passport);


//engine que ira rodar os templates handlebars
app.engine('handlebars', engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//caminho dos arquivos estaticos css e js da pagina
app.use(express.static ('public'));

//Configuração de sessão
app.use(session({
    secret:'kgklçsdfmbslkdfmbldsmkçdfmbdbm',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, maxAge: 2 * 60 * 1000}
}));
app.use(passport.initialize());
app.use(passport.session());

//Rota padrão do aplicativo
app.use('/bloommodas', home);

//Rota de cadastro
app.use('/register', cad);

//Rota Login
app.use('/auth', auth);

//Rota do carrinho de compras
app.use('/buycar', buycar);

//teste e tratamendo da conexão do banco de dados
sequelize.authenticate().then(function () {
   console.log("Connection has been estabilished successfully."); 
}).catch(function (erro) {
    console.log("Unable to connect to the database, please check the documentation of the sequelize API"+erro);
});

//porta que esta rodando o servidor node
app.listen(3000, () => {
    console.log("Running in the port 3000");
});

module.exports = {app, session};