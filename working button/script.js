const inc = document.getElementById("increase")
const dec = document.getElementById("decrease")
const reset = document.getElementById("reset")
const btn = document.querySelectorAll(".buttons")
const label = document.getElementById("labell")


btn.forEach( button = () => {
    button.addEventListener( "click" , () => {
        if (button === inc) {
            label.textContent = Number(label.textContent)+1
        } else if (button === inc) {
            label.textContent = Number(label.textContent)-1
        } else {
            label.textContent = 0
        }
    })
})