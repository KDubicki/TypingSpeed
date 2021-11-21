//Variables
const keyboard = document.querySelector('.game__keyboard')
let keyboardActive = false
const key = []
const colors = []
colors['dark'] = '#1B1A17'
colors['orange'] = '#ff7900'
colors['darkOrange'] = '#ff6d00'

//Functions
const keyboardActivity = status => {
    keyboardActive = status
    clearButtons()
}

export const on = () => keyboardActivity(true)
export const off = () => keyboardActivity(false)

const clearButtons = () => {
    const buttons = keyboard.querySelectorAll('button')
    buttons.forEach(button => button.classList.remove('game__button-active'))
}

const changeButtonColor = (button, color, time) => {
    let keyframe = [{
        color: color[0],
        background: color[1],
        boxShadow: `inset 2rem 2rem 3rem ${ color[2] }`
    }]

    button.animate(keyframe, {
        duration: time,
    })
}

const animateButtonDown = button => {
    const changeTime = 300
    const color = [colors['dark'], colors['orange'], colors['darkOrange']]
    changeButtonColor(button, color, changeTime)
    setTimeout(() => {
        button.classList.add("game__button-active")
    }, changeTime)
}

const animateButtonUp = button => {
    const changeTime = 300
    const color = [colors['orange'], colors['dark'], colors['dark']]
    changeButtonColor(button, color, changeTime)
    setTimeout(() => {
        button.classList.remove('game__button-active')
    }, changeTime)
}

export const keyDown = code => {
    if (!(keyboardActive && key[code] !== true)) return false

    key[code] = true
    const button = keyboard.querySelector('[code="' + code + '"]')
    animateButtonDown(button)
    return true
}

export const keyUp = code => {
    if (!(keyboardActive && key[code] === true)) return

    key[code] = false
    const button = keyboard.querySelector('[code="' + code + '"]')
    animateButtonUp(button)
    button.classList.remove('game__button-active')
}