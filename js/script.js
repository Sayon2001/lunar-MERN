const btn = document.getElementById('btn');
const body = document.querySelector('body');
const div = document.querySelector('.myDiv');
const btn1 = document.querySelector('.btn1');


const btnClick = (color) => {
    body.style.backgroundColor = color;
}

div.innerHTML = "Hello I am a Div";

btn1.addEventListener("click", () => {
    btn1.style.backgroundColor = "red";
})