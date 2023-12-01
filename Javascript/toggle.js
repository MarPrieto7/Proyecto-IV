var toggle = document.getElementById('containert');
var body = document.querySelector('body');

toggle.onclick = function(){
    toggle.classList.toggle('active');
    body.classList.toggle('active');
}