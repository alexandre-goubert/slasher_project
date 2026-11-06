const halloweenMode = document.querySelector('.color-mode-container .halloween-mode');
const defaultMode = document.querySelector('.color-mode-container .default-mode');

halloweenMode.addEventListener('click', () => {
    document.body.classList.add('halloween-mode');
});

defaultMode.addEventListener('click', () => {
    document.body.classList.remove('halloween-mode');
});