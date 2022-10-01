import markupFilms from './markupFilms';
import { renderLibraryPagination } from './pagination';
const refs = {
  btnWatched: document.querySelector('.watched'),
  btnQueue: document.querySelector('.queue'),
  films: document.querySelector('.films'),
  plug: document.querySelector('.plug'),
};

refs.btnWatched.addEventListener('click', getWatched);
refs.btnQueue.addEventListener('click', getQueue);

getWatched();
function getWatched() {
  refs.films.innerHTML = '';
  const parsItem = JSON.parse(localStorage.getItem('watched'));
  if (parsItem !== null && parsItem.length !== 0) {
    refs.plug.style.display = 'none';
    refs.films.innerHTML = markupFilms(parsItem.slice(0, 20));
    renderLibraryPagination('watched', films => {
      refs.films.innerHTML = markupFilms(films);
    });
  } else {
    refs.plug.style.display = 'flex';
    refs.films.innerHTML = '';
  }
  refs.btnQueue.classList.remove('is-active');
  refs.btnWatched.classList.add('is-active');
}

function getQueue() {
  refs.films.innerHTML = '';
  const parsItem = JSON.parse(localStorage.getItem('queue'));
  if (parsItem !== null && parsItem.length !== 0) {
    refs.plug.style.display = 'none';
    refs.films.innerHTML = markupFilms(parsItem.slice(0, 20));
    renderLibraryPagination('queue', films => {
      refs.films.innerHTML = markupFilms(films);
    });
  } else {
    refs.plug.style.display = 'flex';
    refs.films.innerHTML = '';
  }
  refs.btnQueue.classList.add('is-active');
  refs.btnWatched.classList.remove('is-active');
}
