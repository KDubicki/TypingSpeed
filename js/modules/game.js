import * as timer from './timer.js'
import * as keyboard from './keyboard.js'
// this.keyboard = document.querySelector('.game__keyboard')
// this.text = document.querySelector('.game__text')

export const status = () => timer.active

export const stop = () => keyboard.off()

export const start = time => {
    timer.setTime(time)
    keyboard.on()
    timer.start()
}