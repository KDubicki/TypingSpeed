const keyboard = document.querySelector('.game__keyboard')
let isActive = false
const key = []
const colors = {
    dark: '#1B1A17',
    orange: '#ff7900',
    darkOrange: '#ff6d00',
}

const keyboardActivity = () => {
    isActive = !isActive
    clearButtons()
}

export const on = () => {
    keyboardActivity()
    document.addEventListener('keyup', keyUp)
    document.addEventListener('keydown', keyDown)
}

export const off = () => {
    document.removeEventListener('keyup', keyUp)
    document.removeEventListener('keydown', keyDown)
    keyboardActivity()
}

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

    button.animate(keyframe, { duration: time })
}

const animateButtonDown = button => {
    const changeTime = 300
    const color = [colors.dark, colors.orange, colors.darkOrange]
    changeButtonColor(button, color, changeTime)
    setTimeout(() => {
        button.classList.add("game__button-active")
    }, changeTime)
}

const animateButtonUp = button => {
    const changeTime = 300
    const color = [colors.orange, colors.dark, colors.dark]
    changeButtonColor(button, color, changeTime)
    setTimeout(() => {
        button.classList.remove('game__button-active')
    }, changeTime)
}

const keyDown = e => {
    const code = e.code
    if (!(isActive && key[code] !== true)) return

    key[code] = true
    const button = keyboard.querySelector(`[code="${ code }"]`)
    animateButtonDown(button)
}

const keyUp = e => {
    const code = e.code
    if (!(isActive && key[code] === true)) return

    key[code] = false
    const button = keyboard.querySelector(`[code="${ code }"]`)
    animateButtonUp(button)
    button.classList.remove('game__button-active')
}