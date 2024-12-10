
const menubar = document.querySelector('.menubar');
const xicon = document.querySelector('.x')
const div = document.querySelector('.maindiv')

xicon.addEventListener("click", () => {
    xicon.style.display = "none"
    menubar.style.display = "block"
    div.style.marginLeft = "-25rem"
})

menubar.addEventListener("click", () => {
    menubar.style.display = "none"
    xicon.style.display = "block"
    div.style.marginLeft = "0"
})





