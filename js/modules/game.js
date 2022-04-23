import * as timer from './timer.js'
import * as keyboard from './keyboard.js'
import * as text from './text.js'
import * as result from './result.js'
// import * as setting from './setting.js'

let time = 60;

const game = document.querySelector('.game')
let handlerTimeInterval = null

const isPlaying = () => {
    timer.isActive
        ? timer.update()
        : stop();
}

export const start = () => {
    if (game.classList.contains('blur')) game.classList.remove('blur');
    game.classList.add('hidden');
    // setting.hide();
    preparation();
}

const ready = () => {
    handlerTimeInterval = setInterval(isPlaying, 1000);
    keyboard.on();
    timer.start();
    if (game.classList.contains('hidden')) game.classList.remove('hidden');
}

const preparation = () => {
    const preparations = document.querySelectorAll('.preparation');
    preparations.forEach((elem, index) => {
        if (elem.classList.contains('preparation--show')) elem.classList.remove('preparation--show');
    });
    preparations.forEach((elem, index) => {
        let timeOut = 1000 * index;
        setTimeout(() => elem.classList.add('preparation--show'), timeOut);
    });

    timer.setTime(time);
    text.on();
    setTimeout(ready, 3000);
}

export const stop = () => {
    text.off();
    keyboard.off();
    clearInterval(handlerTimeInterval);
    game.classList.add('blur');
    result.show({
        total: text.getTotal(),
        correct: text.getCorrect(),
        time: time,
    });
}