const timer = document.querySelector('.game__timer')
export let active = false
let time = 0
let basicTime = 1
let color = 120
const basicColor = 120

export const start = () => {
    color = basicColor
    active = true
}

export const update = () => {
    let newColor = `hsl(${ color }, 100%, 50%)`

    timer.textContent = calcTime()
    timer.style.color = newColor
    timer.style.borderColor = newColor
    color = (time / basicTime) * basicColor

    if (time > 0) time--
}

const calcTime = () => {
    const minutes = Math.floor(time / 60)
    const seconds = time - (minutes * 60)
    return `${ minutes } : ${ seconds < 10 ? `0${ seconds }` : seconds }`
}

export const setTime = (newTime = 0) => {
    basicTime = newTime
    time = newTime
}

export const stop = () => active = false





