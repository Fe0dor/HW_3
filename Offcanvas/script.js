const button = document.getElementById('button1');
const buttonX = document.getElementById('button2');
const offcanvas = document.getElementsByClassName('offcanvas')[0];
const black = document.getElementsByClassName('offcanvas__black')[0];
button.addEventListener("click", open);
buttonX.addEventListener('click', close);
black.addEventListener('click', close);

function open() {
    offcanvas.classList.add('show');
    black.classList.add('show');
}

function close() {
    offcanvas.classList.add('motion');
    black.classList.add('motion');
    setTimeout(() => {offcanvas.classList.remove('show'); offcanvas.classList.remove('motion')}, 500);
    setTimeout(() => {black.classList.remove('show'); black.classList.remove('motion')}, 500);    
}