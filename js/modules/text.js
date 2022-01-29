const board = document.querySelector('.game__board')
const text = document.querySelector('.game__text')
const textarea = document.querySelector('textarea')

const API_URL = 'https://api.quotable.io/random?minLength=60&maxLength=75'
let rowsLength = []
let isActive = false

const changeStatus = () => isActive = !isActive
const textareaFocus = () => textarea.focus()

export const on = () => {
    clear()
    for (let i = 0; i < 100; i++) renderNewRow()
    textarea.addEventListener('input', checkerText)
    document.addEventListener('click', textareaFocus)
    textareaFocus()
    changeStatus()
}

const clear = () => {
    rowsLength = []
    text.innerText = textarea.value = ''
    board.value = null
}

const renderNewRow = async () => {
    const row = await getRandomQuart()

    text.innerHTML += `
        <p>
            <a href="#${ rowsLength.length }"></a>
            <span>${ [...row].join('</span><span>') }</span>
        </p>
    `

    let firstElem = rowsLength[rowsLength.length - 1] || 0;
    rowsLength[rowsLength.length] = parseInt(firstElem + row.length);
}

const getRandomQuart = () => {
    return fetch(API_URL)
        .then(response => response.json())
        .then(data => data.content)
}

const checkerText = async () => {
    if (!isActive) return;

    const characters = text.querySelectorAll('span');
    const userText = textarea.value;
    characters.forEach((ch, index) => {
        if (index >= userText.length) ch.classList.remove('correct', 'incorrect');
        else {
            ch.className = (ch.innerHTML === userText[index])
                ? 'correct'
                : 'incorrect';
        }
    })

    scroll(userText.length);
}

const scroll = len => {
    let position = 0;
    rowsLength.forEach(row => {
        if (len >= row) position++;
    })

    text.scroll({
        top: `${ position * 32 }`,
        behavior: 'smooth'
    });
}

export const off = () => {
    // document.removeEventListener('click')
}