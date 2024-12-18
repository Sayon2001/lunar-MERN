let string = "";
let buttons = document.querySelectorAll(".button");
let input = document.querySelector("input");

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === "=") {
            string = eval(string)
            input.value = string
        } else if (e.target.innerHTML === "C") {
            string = ""
            input.value = string
        } else if (e.target.innerHTML === "DEL") {
            i = string.length - 1
            string = string.substring(0, i)
            input.value = string
        }
        else {
            string = string + e.target.innerHTML;
            input.value = string;
        }
    })
})