function msg() {
    alert("Button is ok!!");
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
    window.location.href = "index.html";
}
$('.carousel').carousel({
    interval: 2000
});