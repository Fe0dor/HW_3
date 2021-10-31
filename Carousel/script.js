const items = document.querySelectorAll('.carousel-item');
const indicators = document.querySelector('.carousel-indicators').children;
let buttonLeft = document.getElementById('left');
const buttonRight = document.getElementById('right');
var i = 0;

buttonLeft.addEventListener("click", back);
buttonRight.addEventListener("click", forward);

function eee() {
    console.log(11111);
}

let q = setInterval(forward, 5000);

function forward() {
    console.log(i);
    items[i].classList.remove('active');
    indicators[i].classList.remove('active');
    i += 1;
    if (i >= items.length) {
        i = 0;
    }
    items[i].classList.add('active');
    indicators[i].classList.add('active');
}

function back() {
    items[i].classList.remove('active');
    indicators[i].classList.remove('active');
    i -= 1;
    if (i < 0) {
        i = items.length - 1;
    }
    items[i].classList.add('active');
    indicators[i].classList.add('active');
}