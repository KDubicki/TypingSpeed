import * as timer from './timer.js'
import * as keyboard from './keyboard.js'
// import * as text from './text.js'

export const status = () => timer.active

export const stop = () => {
    document.removeEventListener('keyup', buttonUp)
    document.removeEventListener('keydown', buttonDown)

    cursorActivity()
    keyboard.off()
    timer.setTime(0)
}

const cursorActivity = () => {
    const game = document.querySelector('.game')
    game.classList.toggle('game-cursor_disabled')
}

export const start = time => {
    timer.setTime(time)
    keyboard.on()
    timer.start()
    cursorActivity()

    document.addEventListener('keyup', buttonUp)
    document.addEventListener('keydown', buttonDown)
}

const buttonDown = e => {
    if (keyboard.keyDown(e.code)) {}
}

const buttonUp = e => {
    keyboard.keyUp(e.code)
}
