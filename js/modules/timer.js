// Basic variables
const timer = document.querySelector('.game__timer')
export let active = false
let time = 0
let basicTime = 1
let color = 120
const basicColor = 120
let handlerTimeInterval = null

const stopTimer = () => {
    clearInterval(handlerTimeInterval)
    active = false
}

const calcTime = () => {
    const minutes = Math.floor(time / 60)
    const seconds = time - (minutes * 60)
    return `${ minutes } : ${ seconds < 10 ? `0${ seconds }` : seconds }`
}

const timerUpdate = () => {
    let newColor = `hsl(${ color }, 100%, 50%)`

    timer.textContent = calcTime()
    timer.style.color = newColor
    timer.style.borderColor = newColor
    color = (time / basicTime) * basicColor

    time <= 0 ? stopTimer() : time--
}

export const setTime = (newTime = 0) => {
    basicTime = newTime
    time = newTime
    timerUpdate()
}

export const start = () => {
    color = basicColor
    active = true
    handlerTimeInterval = setInterval(timerUpdate, 1000)
}

