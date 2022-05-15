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
function redirect(){
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

    let username = document.getElementById('usrname');
    let lastname = document.getElementById('usrlastname');
    let email = document.getElementById('usremail');
    let cpf = document.getElementById('usrcpf');
    let senha = document.getElementById('usrpassword');
    let truesenha = document.getElementById('usrtruepassword');

    if (username.value == '') {
        alert("Digite seu nome!");
        event.preventDefault();
    }    
    else if(lastname.value == '') {
        alert("Digite seu sobrenome!");
        event.preventDefault();
    } 
    else if(email.value == ''){
        alert("Digite seu email!");
        event.preventDefault();
    } 
    else if (cpf.value == '') {
        alert("Digite seu cpf!");
        event.preventDefault();
    } 
    else if (senha.value != truesenha.value){
        alert("Senhas não coincidem!");
        event.preventDefault();
    } 
    else if(senha.value == '',truesenha.value == '' ){
        alert("Digite a senha!");
        event.preventDefault();
    } else {
        alert('Parabens! Voce esta cadastrado');
        setTimeout(() => {
           redirect();
        }, 3000);

    }
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