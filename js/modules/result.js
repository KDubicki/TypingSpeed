const modal = document.querySelector('.result')

export const hide = () => {
    modal.classList.add('hidden');
}

export const show = ({ total, correct, time } = {}) => {
    const results = modal.querySelector('.modal__game');

    const incorrect = total - correct;
    results.innerHTML = `
          <p class="modal__result">Speed: ${ Math.round((total / time) * 100) / 100 } characters/s</p>
          <p class="modal__result">Accuracy: ${ Math.round((correct / total) * 100)}%</p>
          <p class="modal__result">Correct chars: ${ correct }</p>
          <p class="modal__result">Incorrect characters: ${ incorrect }</p>
          <p class="modal__result">Total characters: ${ total }</p>
          <p class="modal__result">Total Time: ${ time } s</p>
    `;

    modal.classList.remove('hidden');
}