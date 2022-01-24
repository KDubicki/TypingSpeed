import * as timer from './timer.js'
import * as keyboard from './keyboard.js'
import * as text from './text.js'

const game = document.querySelector('.game')
let handlerTimeInterval = null

const isPlaying = () => {
    timer.active
        ? timer.update()
        : stop()
}

export const start = time => {
    text.on()
    keyboard.on()
    timer.start(time)
    cursorActivity()
    handlerTimeInterval = setInterval(isPlaying, 1000)
}

export const stop = () => {
    keyboard.off()
    timer.stop()
    cursorActivity()
    clearInterval(handlerTimeInterval)
}

const cursorActivity = () => {
    game.classList.toggle('game-cursor_disabled')
}