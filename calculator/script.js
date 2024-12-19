let string = "";
let buttons = document.querySelectorAll(".button");
let input = document.querySelector("input");
let isOn = false;
let bulb = document.querySelector(".bulb")


input.disabled = true
buttons.forEach((button) => {
    button.disabled = true;
})

document.querySelector(".btnOff").addEventListener("click", (e) => {
    string = ""
    input.value = string
    input.disabled = true
    buttons.forEach((button) => {
        button.disabled = true;
    })
    bulb.style.backgroundColor = "red"

})
document.querySelector(".btnOn").addEventListener("click", (e) => {
    input.disabled = false
    buttons.forEach((button) => {
        button.disabled = false;
    })
    bulb.style.backgroundColor = "green"
})



Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === "=") {
            string = eval(string)
            input.value = string
        } else if (e.target.innerHTML === "C") {
            string = ""
            input.value = string
        } else if (e.target.innerHTML === "DEL") {
            if (typeof string === "string") {
                string = string.substring(0, string.length - 1)
                input.value = string
            } else {
                string = ""
                input.value = string
            }
        }
        else {
            string = string + e.target.innerHTML;
            input.value = string;
        }
    })
})