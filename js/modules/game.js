import * as timer from './timer.js'
import * as keyboard from './keyboard.js'
// import * as text from './text.js'

let handlerTimeInterval = null

const isPlaying = () => timer.active ? timer.update() : stop()

export const stop = () => {
    document.removeEventListener('keyup', buttonUp)
    document.removeEventListener('keydown', buttonDown)

    cursorActivity()
    keyboard.off()
    clearInterval(handlerTimeInterval)
    timer.stop()
}

const cursorActivity = () => {
    const game = document.querySelector('.game')
    game.classList.toggle('game-cursor_disabled')
}

export const start = time => {
    keyboard.on()
    timer.setTime(time)
    timer.start()
    handlerTimeInterval = setInterval(isPlaying, 1000)

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
