const board = document.querySelector('.game__board')
const text = document.querySelector('.game__text')
const textarea = document.querySelector('textarea')

const API_URL = 'https://api.quotable.io/random?minLength=60&maxLength=75'

export const on = () => {
    text.innerText = textarea.value = ''
    board.value = null

    for (let i = 0; i < 5; i++)
        renderNewRow()

    textarea.addEventListener('input', checkerText)
    textarea.focus()
}

const renderNewRow = async () => {
    const row = await getRandomQuart()
    text.innerHTML += `
        <p>
            <span>${ [...row].join('</span><span>') }</span>
        </p>
    `
}

const getRandomQuart = () => {
    return fetch(API_URL)
        .then(response => response.json())
        .then(data => data.content)
}

const checkerText = () => {
    console.log('change')
}

export const off = () => {

}