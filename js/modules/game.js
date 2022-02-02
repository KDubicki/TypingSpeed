import * as timer from './timer.js'
// import * as keyboard from './keyboard.js'
import * as text from './text.js'
import * as result from './result.js'

let time = 60;

const welcomePage = document.querySelector('.hello');
const game = document.querySelector('.game')
let handlerTimeInterval = null

const isPlaying = () => {
    timer.isActive
        ? timer.update()
        : stop();
}

export const start = () => {

    welcomePage.classList.add('hidden');

    result.hide();
    text.on()
    // keyboard.on()
    timer.start(time)
    cursorActivity()

    preparation();
}


const preparation = () => {
    const preparations = document.querySelectorAll('.preparation');
    preparations.forEach((elem, index) => {
        let timeOut = 1000 + (1500 * index);
        setTimeout(() => elem.classList.add('preparation--show'), timeOut);
    });

    timer.update();
    setTimeout(() => {
        handlerTimeInterval = setInterval(isPlaying, 1000);
        game.classList.remove('blur', 'hidden');
    }, 5500);
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