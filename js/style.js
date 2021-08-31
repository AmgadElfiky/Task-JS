let btn = document.querySelector('button');
let p = document.querySelector('p');
let body = document.querySelector('body');
let i = document.querySelector('i');

btn.onclick = function () {
    if (body.classList.contains('body')) {
        body.classList.toggle('body');
        btn.classList = "btn btn-dark";
        btn.classList += " my-3"
        i.classList = "far fa-moon";
    } else {
        body.classList.toggle('body');
        btn.classList = "btn btn-light";
        btn.classList += " my-3"
        i.classList = "far fa-sun";
    }
}

// ----------------------------------------------------------

let input = document.querySelectorAll('input');
let btn2 = document.querySelectorAll('button');
let div = document.getElementsByClassName('draw');

btn2[1].onclick = function () {
    w = input[0].value;
    h = input[1].value;
    bg = input[2].value;

    div[0].style.width = w + "px";
    div[0].style.height = h + "px";
    div[0].style.backgroundColor = bg;

}