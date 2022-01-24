const timer = document.querySelector('.game__timer')
export let active = false
let time = 0
let basicTime = 1
let color = 120
const basicColor = 120

export const start = newTime => {
    basicTime = time = newTime
    color = basicColor
    active = true
}

export const update = () => {
    let newColor = `hsl(${ color }, 100%, 50%)`

    timer.textContent = calcTime()
    timer.style.color = timer.style.borderColor = newColor
    color = (time / basicTime) * basicColor
    if (time > 0) time--
}

const calcTime = () => {
    const minutes = Math.floor(time / 60)
    let seconds = time - (minutes * 60)
    seconds = seconds < 10
        ? seconds.toString().padStart(2, '0')
        : seconds

    return `${ minutes } : ${ seconds }`
}

export const stop = () => active = false





