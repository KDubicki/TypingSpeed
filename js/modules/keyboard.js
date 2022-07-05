const keyboard = document.querySelector('.game__keyboard');
let isActive = false;
const key = [];

export const on = () => {
    isActive = true;
    document.addEventListener('keyup', keyUp);
    document.addEventListener('keydown', keyDown);
}

export const off = () => {
    document.removeEventListener('keyup', keyUp);
    document.removeEventListener('keydown', keyDown);
    isActive = false;
    clearButtons();
}

const clearButtons = () => {
    const buttons = keyboard.querySelectorAll('button');
    buttons.forEach(button => button.classList.remove('game__button--active'));
}

const keyDown = e => {
    const code = e.code;
    if (!(isActive && key[code] !== true)) return;
    key[code] = true;
    keyEffect(code);
}

const keyUp = e => {
    const code = e.code;
    if (!(isActive && key[code] === true)) return;
    key[code] = false;
    keyEffect(code);
}

const keyEffect = code => {
    const button = keyboard.querySelector(`[data-code="${ code }"]`);
    if (button) button.classList.toggle('game__button--active');
}