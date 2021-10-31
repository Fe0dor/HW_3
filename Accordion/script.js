const items = document.querySelectorAll(".accordion-item");

let old = null;

function change() {
    let a;
    for (let i = 0; i < items.length; i++) {
        if (items[i].children[0] === this) {
            a = i;
            break;
        }
    }

    if (a === old) {
        if (items[a].children[0].classList.contains("selectedHeader")) {
            close(old);
        } else {
            open(a);
        }
    } else {
        if (old != null) {
           close(old);
        }
        open(a);
    }
    console.log(a, old);
}

var selectedItem = 0;

for (let i = 0; i < items.length; i++) {
    items[i].children[0].addEventListener("click", change);
}

function close(i) {
    items[i].children[0].classList.remove("selectedHeader");
    items[i].children[1].classList.remove("selectedText");
    items[i].children[1].style.height = "0px";
    old = null;
}

function open(i) {
    items[i].children[0].classList.add("selectedHeader");
    items[i].children[1].classList.add("selectedText");
    items[i].children[1].style.height = String(items[i].children[1].scrollHeight) + "px";
    old = i;
}