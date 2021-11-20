import * as timer from './timer.js'
import * as keyboard from './keyboard.js'
// this.keyboard = document.querySelector('.game__keyboard')
// this.text = document.querySelector('.game__text')

export const status = () => timer.active

export const stop = () => {
    keyboard.off()

    document.removeEventListener('keyup', buttonUp)
    document.removeEventListener('keydown', buttonDown)
}

export const start = time => {
    timer.setTime(time)
    keyboard.on()
    timer.start()

    document.addEventListener('keyup', buttonUp)
    document.addEventListener('keydown', buttonDown)
}

const buttonDown = e => {
    if (keyboard.keyDown(e.code)) {

    }
}

const buttonUp = e => {
    keyboard.keyUp(e.code)
}
