import {renderMovieModal} from './api_movie'
import markupFilms from './markupFilms';




const refs = {
    btnWatched : document.querySelector('.watched'),
    btnQueue : document.querySelector('.queue'),
    films : document.querySelector('.films'),
    plug : document.querySelector('.plug')
}


refs.btnWatched.addEventListener('click', getWatched)
refs.btnQueue.addEventListener('click', getQueue)

getWatched();
function getWatched(){
    refs.films.innerHTML = '';
    const parsItem = JSON.parse(localStorage.getItem('watched'))
    if(parsItem !== null && parsItem.length !== 0){
        refs.plug.style.display = 'none'
        refs.films.insertAdjacentHTML('beforeend',markupFilms(parsItem))
        refs.btnQueue.classList.remove('is-active')
        refs.btnWatched.classList.add('is-active')
    }else{
        refs.plug.style.display = 'flex'
        refs.films.innerHTML = '';
    }
}

function getQueue(){
    refs.films.innerHTML = '';
    const parsItem = JSON.parse(localStorage.getItem('queue'))
    if(parsItem !== null && parsItem.length !== 0){
        refs.plug.style.display = 'none'
        refs.films.insertAdjacentHTML('beforeend',markupFilms(parsItem))
        refs.btnWatched.classList.remove('is-active')
        refs.btnQueue.classList.add('is-active')
    }else{
        refs.plug.style.display = 'flex'
        refs.films.innerHTML = '';
    }
}


