import * as setup from './modules/setup.js'
import * as game from './modules/game.js'
import * as result from './modules/result.js'
import * as setting from './modules/setting.js'

const welcomePage = document.querySelector('.hello');
const startButtons = document.querySelectorAll('.start');
const settingButtons = document.querySelectorAll('.settings-show');
let firstGame = true;

const start = () => {
    setting.hide();
    welcomePage.classList.add('hello__hidden');
    result.hide();
    let timeout = 0;
    if (firstGame) {
        timeout = 1300;
        firstGame = false;
    }
    setTimeout(() => game.start(setup.time), timeout);
}


startButtons.forEach(btn => btn.addEventListener('click', start))
settingButtons.forEach(btn => btn.addEventListener('click', setting.show));

