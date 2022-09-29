import markupFilms from './markupFilms';
import Api from './api';
import { genre } from './genre';

const refs = {
  search: document.querySelector('.form__input'),
  button: document.querySelector('.search_btn'),
  gallery: document.querySelector('.gallery'),
  filmLsit: document.querySelector('.films'),
  searcError: document.querySelector('.search__error-text'),
};

const api = new Api();

refs.search.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  refs.filmLsit.innerHTML = '';
  api.searchQuery = e.currentTarget.elements.searchQuery.value;
  findRenderUi();
}

function renderUi(result) {
  refs.filmLsit.insertAdjacentHTML('beforeend', markupFilms(result));
}

async function findRenderUi() {
  try {
    const resultApi = await api.search();
    api.totalResult === 0
      ? refs.searcError.classList.remove('is-hidden')
      : refs.searcError.classList.add('is-hidden');

    // console.log(api.totlaPages);
    renderUi(resultApi);
  } catch (error) {
    console.log(error);
  }
}
