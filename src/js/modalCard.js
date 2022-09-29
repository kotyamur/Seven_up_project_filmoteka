import axios from 'axios';
import '../sass/components/_modal_movie.scss';

const filmsContainer = document.querySelector('.films');
const backdropEl = document.querySelector('.modal-movie');
const bodyEl = document.querySelector('.body');
const backdropFooterEl = document.querySelector('[data-backdrop]');

filmsContainer.addEventListener('click', onFilmCardClick);

function onFilmCardClick(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== 'IMG') {
    return;
  }

  backdropEl.classList.remove('is-hidden');
  backdropFooterEl.classList.remove('is-hidden');
  dataIdSearch(evt.target.closest('li').dataset.id);
  bodyEl.classList.add('overhidden');
  document.body.classList.add('no-scroll');
}

function fetchId(movie_id) {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${movie_id}?api_key='a97f5a48286213b4292b81d1cb5cf0d2'`
    )
    .then(response => {
      return response.data;
    });
}

function dataIdSearch(movie_id) {
  fetchId(movie_id)
    .then(renderMovieModal)
    .catch(error => {
      console.log(error);
    });
}

function renderMovieModal({
  poster_path,
  original_title,
  title,
  vote_average,
  vote_count,
  genres,
  overview,
  popularity,
}) {
  return `
    <img
      class="modal__image"
      src="https://image.tmdb.org/t/p/w500${poster_path}"
      alt="${title}"
      width="240"
      height="357"
    />
    <div class="modal__info-box">
      <p class="modal__title">${title}</p>
      <div class="modal__features-box">
        <div class="modal__features-issues">
          <p class="modal__keys">Vote / Votes</p>
          <div class="modal__values-box">
            <p class="modal__value-numbers modal__value-numbers--accent">${vote_average}</p>
            <span class="modal__slash">/</span>
            <p class="modal__value-numbers modal__value-numbers--simple">${vote_count}</p>
          </div>
        </div>
        <div class="modal__features-issues">
          <p class="modal__keys">Popularity</p>
          <p class="modal__value-numbers">${popularity}</p>
        </div>
        <div class="modal__features-issues">
          <p class="modal__keys">Original Title</p>
          <p class="modal__value-text modal__value--main-text">${original_title}</p>
        </div>
        <div class="modal__features-issues">
          <p class="modal__keys">Genre</p>
          <p class="modal__value-text">${genres}</p>
        </div>
      </div>
      <p class="modal__about-title">About</p>
      <p class="modal__about-text">${overview}</p>
      <div class="modal__bottom-thumb">
        <div class="modal__btn-box">
          <button class="modal__btn" type="button">add to watched</button>
          <button class="modal__btn" type="button">add to queue</button>
        </div>
      </div>
    </div>
    `;
}

backdropEl.insertAdjacentHTML('beforeend', renderMovieModal());