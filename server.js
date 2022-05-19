var express = require("express");
var app = express();
const {engine} = require("express-handlebars");

const home = require("./routes/home"); //importação das rotas definidas no arquivo home
const sequelize = require('./App/config/config_db'); //importação da conexão da configuração da base de dados
const bodyParser = require('body-parser'); //biblioteca de manipulação de dados dos formularios

//engine que ira rodar os templates handlebars
app.engine('handlebars', engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//caminho dos arquivos estaticos css e js da pagina
app.use(express.static ('public'));

//Rota padrão do aplicativo
app.use('/bloommodas', home);

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

module.exports = app;