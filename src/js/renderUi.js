import markupFilms from './markupFilms';
import Api from './api';
import { genre } from './genre';
import { loader, stopLoader } from './loader';
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
  api.resetPage();
  api.searchQuery = e.currentTarget.elements.searchQuery.value;
  findRenderUi();
}

export function renderUi(result) {
  if (result.length === 0) {
    return;
  }
  refs.filmLsit.innerHTML = markupFilms(result);
}

async function findRenderUi() {
  try {
    if (api.query === '') {
      return;
    }
    loader();
    const resultApi = await api.search();

    api.totalResult === 0
      ? refs.searcError.classList.remove('is-hidden')
      : refs.searcError.classList.add('is-hidden');
    renderUi(resultApi);
    renderPagination(api, renderUi, 'search');
    stopLoader();
  } catch (error) {
    console.log(error);
  }
}
