const buttons = document.querySelectorAll('.btn-filters');
const moviesList = document.querySelectorAll('.container-movies > div');
const searchInput = document.querySelector('#search');
const searchForm = document.querySelector('.search-bar');
const pagination = document.querySelector('.pagination');

const filmPerPage = 8;

let currentPage = 1;
let selectDecade = 'tous';
let searchText = '';


function displayMovies() {
    const filteredMovies = Array.from(moviesList).filter(movie => {  //
        const movieTitle = movie.querySelector('h3').textContent.toLowerCase();
        const movieYear = Number(movie.dataset.year);
        const movieDecade = Math.floor(movieYear / 10) * 10;

        const matchingTitle = movieTitle.includes(searchText);
        const matchingDecade = selectDecade === 'tous' || movieDecade === Number(selectDecade);

        return matchingTitle && matchingDecade;
    });
    const numberOfPages = Math.ceil(filteredMovies.length / filmPerPage);

    currentPage = Math.min(currentPage, Math.max(1, numberOfPages));
    moviesList.forEach(movie => {
        movie.style.display = 'none';
    });
    const startIndex = (currentPage - 1) * filmPerPage;
    const endIndex = startIndex + filmPerPage;

    filteredMovies.slice(startIndex, endIndex).forEach(movie => {
        movie.style.display = '';
    });
    displayPagination(numberOfPages);
}

function displayPagination(numberOfPages) {
    pagination.replaceChildren();

    if (numberOfPages <= 1) {
        return;
    }

    for (let page = 1; page <= numberOfPages; page++) {
        const button = document.createElement('button');
        button.type = 'button';
        button.textContent = page;
        button.setAttribute('aria-label', `Page ${page}`);

        if (page === currentPage) {
            button.setAttribute('aria-current', 'page');
        }

        button.addEventListener('click', () => {
            currentPage = page;
            displayMovies();
            pagination.querySelector('[aria-current="page"]').focus();
        });
        pagination.appendChild(button);
    }
}

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            selectDecade = button.dataset.decade;
            currentPage = 1;
            displayMovies();
        });
    });

    searchForm.addEventListener('submit', event => {
        event.preventDefault();
        searchText = searchInput.value.trim().toLowerCase();
        currentPage = 1;
        displayMovies();
    });

    displayMovies();


