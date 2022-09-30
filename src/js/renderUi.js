import markupFilms from './markupFilms';
import Api from './api';
import { genre } from './genre';
import { loader } from './loader';
import { renderPagination } from './pagination';

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
  loader();
  api.searchQuery = e.currentTarget.elements.searchQuery.value;
  findRenderUi();
}

export function renderUi(result) {
  refs.filmLsit.innerHTML = markupFilms(result);
}

async function findRenderUi() {
  try {
    const resultApi = await api.search();
    api.totalResult === 0
      ? refs.searcError.classList.remove('is-hidden')
      : refs.searcError.classList.add('is-hidden');

    // console.log(api.totlaPages);
    renderUi(resultApi);
    renderPagination(api, renderUi, 'search');
  } catch (error) {
    console.log(error);
  }
}
