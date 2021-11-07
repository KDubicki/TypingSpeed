// this.keyboard = document.querySelector('.game__keyboard')
// this.text = document.querySelector('.game__text')

// timer
const timer = document.querySelector('.game__timer')
let handleTimeInterval
let basicTime = 0
let time = 0
const basicColor = 125;
let color = 125;

const timerUpdate = () => {
    console.log('update time')
    time--
    timer.textContent = time
    timer.style.color = `hsl(${ color }, 100%, 50%)`
    timer.style.borderColor = `hsl(${ color }, 100%, 50%)`
    color = (time / basicTime) * basicColor

    if(time <= 0) clearInterval(handleTimeInterval)
}

const update = () => {
    handleTimeInterval = setInterval(timerUpdate, 1000)
}

    // keydown(event) {
    //
    // }
    //
    // keyup(event) {
    //
    // }
const gameStart = newTime => {
    basicTime = newTime
    time = newTime + 1;
    update();
}


export default gameStart;