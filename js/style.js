let btn = document.querySelector('button');
let p = document.querySelector('p');


btn.onclick = function () {
    if (p.classList.contains('dark')) {
        p.classList.toggle('dark');
        btn.classList = "btn btn-dark";
        btn.innerText = "Dark Mode";

    } else {
        p.classList.toggle('dark');
        btn.classList = "btn btn-light";
        btn.innerText = "Light Mode";
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