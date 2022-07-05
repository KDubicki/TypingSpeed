const board = document.querySelector('.game__board')
const text = document.querySelector('.game__text')
const textarea = document.querySelector('textarea')

const API_URL = 'https://api.quotable.io/random?minLength=60&maxLength=75'
let rowsLength = []
let isActive = false
let currentRow = 0;

const focus = () => textarea.focus();

export const on = async () => {
    clear()
    for (let i = 0; i < 5; i++) await renderNewRow();
    textarea.addEventListener('input', checkerText)
    document.addEventListener('keydown', focus)
    isActive = true;
    text.querySelector('span').classList.add('bullet');
}

const clear = () => {
    rowsLength = []
    text.innerText = textarea.value = ''
    board.value = null
}

const renderNewRow = async () => {
    const row = await getRandomQuart()
    addNewRow(row);

    let elem = rowsLength[rowsLength.length - 1] || 0;
    rowsLength[rowsLength.length] = parseInt(elem + row.length + 1);
}

const addNewRow = row => {
    text.innerHTML += `<p>
        <span>${[...row].join('</span><span>')}</span>
        <span>
        
</span>
        </p>
    `
}

const getRandomQuart = () => {
    return fetch(API_URL)
        .then(response => response.json())
        .then(data => data.content)
        .catch(randomDefaultText)
}

const randomDefaultText = () => {
    const text = [
        'risus ultricies tristique nulla aliquet',
        'scelerisque fermentum dui faucibus in ornare',
        'mauris nunc congue nisi vitae suscipit',
        'mauris nunc congue nisi vitae suscipit',
        'erat imperdiet sed'
    ];
    return text[Math.floor(Math.random() * 5)];
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
    bulletText(characters[userText.length]);
}

const bulletText = (ch) => {
    const handleBullets = text.querySelectorAll('.bullet');
    handleBullets.forEach((bullet) => bullet.classList.remove('bullet'));
    ch.classList.add('bullet');
}

const scroll = async len => {
    let position = 0;
    rowsLength.forEach(row => {
        if (len >= row) {
            position++;
            if (position > currentRow) {
                currentRow = position;
                renderNewRow();
            }
        }
    })

    text.scroll({
        top: position * 32,
        behavior: 'smooth'
    });
}

export const off = () => {
    isActive = false;
    textarea.removeEventListener('input', checkerText);
    document.removeEventListener('keydown', focus);
    text.scroll({top: 0});
}

export const getCorrects = () => text.querySelectorAll('.correct').length;
export const getTotal = () => textarea.value.length;