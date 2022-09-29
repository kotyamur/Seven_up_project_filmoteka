import markupFilms from './markupFilms';
import Api from './api';
import { renderUi } from './renderUi';
import { renderPagination } from './pagination';

const refs = {
  filmLsit: document.querySelector('.films'),
};

const api = new Api();

async function sortTopFilmh() {
  try {
    refs.filmLsit.innerHTML = '';
    const response = await api.searchPopular();
    const sortArrFilm = response.sort(
      (firstReting, secondRating) =>
        secondRating.vote_average - firstReting.vote_average
    );
    renderUi(sortArrFilm);
    renderPagination(api, renderUi, 'searchPopular');
  } catch (error) {
    console.log(error);
  }
}
sortTopFilmh();
