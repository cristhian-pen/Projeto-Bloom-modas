const { get } = require("express/lib/response");


const router = require('../../routes/home')

function msg() {
    alert("Feature in development");
}
function mostrar() {
    document.getElementById("dropopt").classList.toggle('show');
}
window.onclick = (event) => {
    if (!event.target.matches('.dropcat')) {

        var dropcate = document.getElementsByClassName("dropopt");
        for (let i = 0; i < dropcate.length; i++) {
            var opendrop = dropcate[i];
            if (opendrop.classList.contains('show')) {
                opendrop.classList.remove('show');
            }
        }
    }
}
function redirect() {
    window.location.assign('/bloommodas');
}

function aut() {
    var user = document.getElementById('user');
    var pwd = document.getElementById('pwd');

    if (user.value == "teste@teste.com.br", pwd.value == "teste") {
        redirect();
        return;

    } else {
        alert("Credenciais Validas");
        event.preventDefault();
    }
}

function cadastrar() {
    window.location.assign('/bloommodas/testepost');
}

function redsignin() {
    window.location.assign('/bloommodas/login');
}
function redregister() {
    window.location.assign('/bloommodas/cadastro');
}
function promo() {
    window.location.assign('/bloommodas/promocoes');
}