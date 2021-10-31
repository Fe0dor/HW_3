let button = document.getElementById('button1');
const collapse = document.getElementById('collapse1');

let f = false;
button.addEventListener("click", change);
console.log(collapse.scrollHeight);
function change() {
    if (f) {
        collapse.style.height = "0px";
        f = false;
    } else {
        collapse.style.height = String(collapse.scrollHeight) + "px";
        f = true;
    }
}