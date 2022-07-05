import * as timer from './timer.js'
import * as keyboard from './keyboard.js'
import * as text from './text.js'
import * as result from './result.js'
import * as setting from './setting.js'

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
    setting.hide();
    setTimeout(preparation, 500);
}

const ready = () => {
    handlerTimeInterval = setInterval(isPlaying, 1000);
    keyboard.on();
    timer.start();
    if (game.classList.contains('hidden')) game.classList.remove('hidden');
}

const preparation = () => {
    const preparations = document.querySelectorAll('.preparation');
    preparations.forEach((elem) => elem.classList.remove('preparation--show'));
    preparations.forEach((elem, index) => {
        let timeOut = 1000 * index;
        setTimeout(() => elem.classList.add('preparation--show'), timeOut);
    });

    text.on();
    timer.setTime(setting.getTime());
    setTimeout(ready, 3000);
}

export const stop = () => {
    text.off();
    keyboard.off();
    clearInterval(handlerTimeInterval);
    game.classList.add('blur');
    result.show({
        total: text.getTotal(),
        correct: text.getCorrects(),
        time: setting.getTime(),
    });
}