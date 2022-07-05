const timer = document.querySelector('.game__timer');
export let isActive = false;
let time = 0;
let basicTime = 1;
let color = 120;
const basicColor = 120;

export const start = () => isActive = true;

export const setTime = (newTime = basicTime) => {
    basicTime = time = newTime;
    update();
}

export const update = () => {
    color = (time / basicTime) * basicColor;
    timer.textContent = calcTime();
    timer.style.color = timer.style.borderColor = `hsl(${ color }, 100%, 50%)`;
    isActive = !!time;
    time --;
}

const calcTime = () => {
    const minutes = Math.floor(time / 60);
    let seconds = (time - (minutes * 60)).toString().padStart(2, '0');
    return `${ minutes } : ${ seconds }`;
}