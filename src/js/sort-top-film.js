import axios from 'axios';
import markupFilms from './markupFilms';

const refs = {
  filmLsit: document.querySelector('.films'),
};

const API_KEY = 'a97f5a48286213b4292b81d1cb5cf0d2';
const API_URL = 'https://api.themoviedb.org/3';
const API_SORT_MOVIES = '/discover/movie?sort_by=popularity.desc';




async function sortTopFilmh() {
  try{
    refs.filmLsit.innerHTML = '';
    const response = await axios.get(`${API_URL}${API_SORT_MOVIES}&api_key=${API_KEY}`); 
    const arrFilm = response.data.results
    const sortArrFilm = arrFilm.sort( (firstReting, secondRating) =>  secondRating.vote_average - firstReting.vote_average)
    refs.filmLsit.insertAdjacentHTML('beforeend', markupFilms(sortArrFilm));
  }
  catch{
    console.log(error)
  }  
  }
  sortTopFilmh()