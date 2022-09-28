import axios from 'axios';
import '../sass/components/_modal_movie.scss';
import Api from './api';
const filmsContainer = document.querySelector('.films');
const backdropEl = document.querySelector('.modal-movie');
const bodyEl = document.querySelector('.body');
const backdropFooterEl = document.querySelector('[data-backdrop]');

const api = new Api

filmsContainer.addEventListener('click', onFilmCardClick);
function onFilmCardClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  backdropEl.classList.remove('is-hidden');
  backdropFooterEl.classList.remove('is-hidden');
  fetchMovieData(evt.target.closest('li').dataset.id)
  .then(renderMovieModal)
  .catch(error => {
  console.log(error);
})
  bodyEl.classList.add('overhidden');
  document.body.classList.add('no-scroll');
}

function fetchMovieData(movie_id) {
    return api.getSingleMovieByID(movie_id).then(response => {
        console.log(response.data)
      return response.data;
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
    popularity
  }) {
    const genresRender = genres.map(genre => {return genre.name}).join(', ')
    console.log(genresRender)
    const markUp = `<div class="modal__container">
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
            <p class="modal__value-numbers modal__value-numbers--accent">${vote_average.toFixed(1)}</p>
            <span class="modal__slash">/</span>
            <p class="modal__value-numbers modal__value-numbers--simple">${vote_count}</p>
          </div>
        </div>
        <div class="modal__features-issues">
          <p class="modal__keys">Popularity</p>
          <p class="modal__value-numbers">${popularity.toFixed(1)}</p>
        </div>
        <div class="modal__features-issues">
          <p class="modal__keys">Original Title</p>
          <p class="modal__value-text modal__value--main-text">${original_title}</p>
        </div>
        <div class="modal__features-issues">
          <p class="modal__keys">Genre</p>
          <p class="modal__value-text">${genresRender}</p>
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
    </div>`
    backdropEl.insertAdjacentHTML('beforeend', markUp)
}

const watchedBtn = document.querySelector('button[data-type="watched"]')
const queueBtn = document.querySelector('button[data-type="queue"]')

watchedBtn.addEventListener('click', onWatchedFilmsToSaveBtn)
queueBtn.addEventListener('click', onQueueFilmsToSaveBtn)

function onWatchedFilmsToSaveBtn (evt) {
    evt.preventDefault()
    watchedBtn.classList.toggle('active')
    btnWatchedTextContentToChange()
}

function onQueueFilmsToSaveBtn (evt) {
    evt.preventDefault()
    queueBtn.classList.toggle('active')
    btnQueueTextContentToChange()
}

function btnWatchedTextContentToChange() {
    watchedBtn.classList.contains('active') ?
    watchedBtn.textContent='remove from watched' :
    watchedBtn.textContent='add to watched'
}

function btnQueueTextContentToChange() {
    queueBtn.classList.contains('active') ?
    queueBtn.textContent='remove from watched' :
    queueBtn.textContent='add to queue'
}