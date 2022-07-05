import * as result from './result.js'

const modal = document.querySelector('.setting');
const time = modal.querySelector('select');
const keyboardColor = modal.querySelector('#color-select');

export const hide = () => modal.classList.add('hidden');
export const show = () => {
    result.hide();
    if (modal.classList.contains('hidden')) modal.classList.remove('hidden');
}

export const getTime = () => time.value;
export const getKeyboardColor = () => keyboardColor.value;