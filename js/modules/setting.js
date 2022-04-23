const modal = document.querySelector('.setting');

export const hide = () => modal.classList.add('hidden');
export const show = () => {
    if (modal.classList.contains('hidden')) modal.classList.remove('hidden');
}