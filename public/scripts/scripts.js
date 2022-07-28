function msg() {
    alert("Feature in development");
}
function mostrar() {
    document.getElementById("dropopt").classList.toggle('show');
}
window.onmouseover = (event) => {
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

function validationFields() {
    let user = document.getElementById('usrname');
    let lastname = document.getElementById('usrLastName');
    let email = document.getElementById('usrEmail');
    let sex = document.getElementById('usrSex');
    let cpf = document.getElementById('usrCpf');
    let password = document.getElementById('usrPassword');
    let truePassword = document.getElementById('truePassword');

    if (!user.value) {
        alert("Digite o nome");
        event.preventDefault();
    }else if (!lastname.value){
        alert("Dige o sobrenome");
        event.preventDefault();
    } else if (!email.value){
        alert("Digite o email");
        event.preventDefault();
    } else if (!sex.value){
        alert("Escolha um sexo");
        event.preventDefault();
    } else if (!cpf.value){
        alert("Digite um CPF valido");
        event.preventDefault();
    } else if (!password.value){
        alert("Digite a senha");
        event.preventDefault();
    }else if (!truePassword.value){
        alert("Confirme a senha");
        event.preventDefault();
    }else if(password.value != truePassword.value){
        alert("As senhas não são iguais");
        event.preventDefault();
    }
}
function redirect() {
    window.location.assign('/bloommodas');
}

function redsignin() {
    window.location.assign('/auth');
}
/* function redregister() {
    window.location.assign('/register');
} */
function promo() {
    window.location.assign('/bloommodas/promocoes');    
}
function buycar() {
    window.location.assign('/buycar');
}