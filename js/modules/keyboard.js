//Variables
const keyboard = document.querySelector('.game__keyboard')
let keyboardActive = false
const key = []

//Functions
const animateButtonDown = () => {
    console.log('Animation Down')
}

const keyDown = e => {
    if (keyboardActive && key[e.code]) return;

    key[e.code] = true
    animateButtonDown()
}

const animateButtonUp = () => {
    console.log('Animation Up')
}

const keyUp = e => {
    if (keyboardActive && !key[e.code]) return;

    key[e.code] = false
    animateButtonUp()
}

export const off = () => keyboardActive = false
export const on = () => keyboardActive = true

//Events
document.addEventListener('keydown', keyDown)
document.addEventListener('keyup', keyUp)

