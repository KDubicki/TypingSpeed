import * as setup from './modules/setup.js'
import * as game from './modules/game.js'
import {hide as hiddenResult} from './modules/result.js'
// import * as setting from './modules/setting'

const welcomePage = document.querySelector('.hello');
const startButtons = document.querySelectorAll('.start');
// const settingButton = welcomePage.querySelector('.btn-settings');
let firstGame = true;

const start = () => {
    welcomePage.classList.add('hello__hidden');
    hiddenResult();
    let timeout = 0;
    if (firstGame) {
        timeout = 1300;
        firstGame = false;
    }
    setTimeout(() => game.start(setup.time), timeout);
}

// const showSetting = () => setting.show();
startButtons.forEach(btn => btn.addEventListener('click', start))

// settingButton.addEventListener('click', showSetting);

