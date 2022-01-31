import * as timer from './timer.js'
// import * as keyboard from './keyboard.js'
import * as text from './text.js'
import * as result from './result.js'

let time = 60;

const game = document.querySelector('.game')
let handlerTimeInterval = null

const isPlaying = () => {
    timer.isActive
        ? timer.update()
        : stop();
}

export const start = () => {
    result.hide();
    text.on()
    // keyboard.on()
    timer.start(time)
    cursorActivity()
    game.classList.remove('blur');
    handlerTimeInterval = setInterval(isPlaying, 1000)
}

export const stop = () => {
    // keyboard.off()
    text.off();
    cursorActivity()
    clearInterval(handlerTimeInterval)
    game.classList.add('blur');
    result.show({
        total: text.getTotal(),
        correct: text.getCorrent(),
        time: time,
    });
}

const cursorActivity = () => {
    game.classList.toggle('game-cursor_disabled');
}