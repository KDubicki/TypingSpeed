//Variables
const keyboard = document.querySelector('.game__keyboard')
let keyboardActive = false
const key = []

//Functions
export const on = () => keyboardActive = true
export const off = () => keyboardActive = false

const changeButtonStyle = (button) => {
    const changeTime = 600
    let styles = [{
        color: '#1B1A17',
        background: '#ff7900',
        borderColor: '#ff6d00',
        boxShadow: `inset 2rem 2rem 3rem #ff6d00`
    }]

    button.animate(styles, {
        duration: changeTime,
    })
    setTimeout(() => {
        button.style.color = '#1B1A17'
        button.style.background = '#ff7900'
        button.style.borderColor = '#ff6d00'
        button.style.boxShadow = `inset 2rem 2rem 3rem #ff6d00`
    }, changeTime - 50)
}

const animateButtonDown = code => {
    const querySelector = '[code="' + code + '"]'
    const button = keyboard.querySelector(querySelector)
    changeButtonStyle(button, 'red', 'green')
}

export const keyDown = code => {
    if (!(keyboardActive && key[code] !== true)) return false
    console.log(code)
    key[code] = true
    animateButtonDown(code)
    return true
}

const animateButtonUp = () => {
}

export const keyUp = code => {
    if (!(keyboardActive && key[code] === true)) return;

    key[code] = false
    animateButtonUp()
}



