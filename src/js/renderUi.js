import markupFilms from './markupFilms';
import Api from './api';
import { genre } from './genre';

const refs = {
  search: document.querySelector('.form__input'),
  button: document.querySelector('.button__submit'),
  gallery: document.querySelector('.gallery'),
  filmLsit: document.querySelector('.films'),
};

const api = new Api();

refs.search.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  api.searchQuery = e.currentTarget.elements.searchQuery.value;
  findRenderUi();
}

function renderUi(result) {
  refs.filmLsit.insertAdjacentHTML('beforeend', markupFilms(result));
}

async function findRenderUi() {
  try {
    const resultApi = await api.search();
    // console.log(api.totlaPages);
    renderUi(resultApi);
  } catch (error) {
    console.log(error);
  }
}
