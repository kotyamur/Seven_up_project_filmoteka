import axios from 'axios';
import markupFilms from './markupFilms';
import renderPagination from './pagination'
import Api from './api';


let pageNumber = 1;
const refs = {
  filmLsit: document.querySelector('.films'),
};

const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'a97f5a48286213b4292b81d1cb5cf0d2';

  

async function sortTopFilmh() {
  try{
    refs.filmLsit.innerHTML = '';
    const response = await axios.get(`${API_URL}/trending/movie/week?api_key=${API_KEY}`); 
    const arrFilm = response.data.results


    const sortArrFilm = arrFilm.sort( (firstReting, secondRating) =>  secondRating.vote_average - firstReting.vote_average)
    
   
   renderTopFilm(sortArrFilm)
   
  }
  catch{
    console.log(error)
  }  
  }


function renderTopFilm(sortArrFilm){
  refs.filmLsit.insertAdjacentHTML('beforeend', markupFilms(sortArrFilm))
}


  sortTopFilmh()