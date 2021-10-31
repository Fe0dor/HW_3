const button = document.getElementById('nav_button');
const content = document.getElementsByClassName('navbar__content')[0];
button.addEventListener("click", toggle);

let f = false;

function toggle() {
    if (f) {
        content.style.height = String(content.scrollHeight) + "px"
        setTimeout(() => {content.style.height = "0px"}, 10);
        f = false;
    } else {
        content.style.height = String(content.scrollHeight) + "px";
        setTimeout(() => {content.style.height = 'auto'}, 300);
        f = true;
    }
}

const drItems = document.querySelectorAll('.nav__li.dropdown');
for (let i = 0; i < drItems.length; i++) {
    drItems[i].children[0].addEventListener('click', drToggle);
}

function drToggle() {
    let a;
    for (let i = 0; i < drItems.length; i++) {
        if (drItems[i].children[0] === this) {
            a = i;
            break;
        }
    }
    if (drItems[a].children[1].classList.contains('show')) {
        drItems[a].children[1].classList.remove('show');
    } else {
        drItems[a].children[1].classList.add('show');
    }
}

window.addEventListener('click', e => {
    const target = e.target
    if (!target.closest('.navbar') && !target.closest('.dropdown')) {
        for (let i = 0; i < drItems.length; i++) {
            drItems[i].children[1].classList.remove('show');
        }
    }
});