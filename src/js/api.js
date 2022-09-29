import axios from 'axios';
const APIKEY = 'a97f5a48286213b4292b81d1cb5cf0d2';
const URL = 'https://api.themoviedb.org/3/';

export default class Api {
  constructor() {
    this.query = '';
    this.totalResult = '';
    this.totlaPages = '';
    this.genre = [];
    this.page = 1;
  }

  async search() {
    const searchParams = new URLSearchParams({
      api_key: APIKEY,
      query: this.query,
      page: this.page,
    });

    const api = axios.create({
      baseURL: URL,
    });

    const result = await api.get(`search/movie?${searchParams}`);

    this.totalResult = result.data.total_results;
    this.totlaPages = result.data.total_pages;

    return result.data.results;
  }

  async searchPopular() {
    const searchParams = new URLSearchParams({
      api_key: APIKEY,
      page: this.page,
    });

    const api = axios.create({
      baseURL: URL,
    });

    const result = await api.get(`trending/all/week?${searchParams}`);

    this.totalResult = result.data.total_results;
    this.totlaPages = result.data.total_pages;

    return result.data.results;
  }

  async findGenre() {
    const api = axios.create({
      baseURL: URL,
    });
    const searchParamsKey = new URLSearchParams({
      api_key: APIKEY,
    });
    const apiGenre = axios.create({
      baseURL: 'URL',
    });

    const genre = await api.get(`genre/movie/list?${searchParamsKey}`);
    this.genre = genre.data.genres;
    return genre.data.genres;
  }

  get searchQuery() {
    return this.query;
  }

  set searchQuery(newQuery) {
    this.query = newQuery;
  }

  getSingleMovieByID(movie_id) {
    return axios.get(
      `https://api.themoviedb.org/3/movie/${movie_id}?api_key=a97f5a48286213b4292b81d1cb5cf0d2`,
    );
  }
}
