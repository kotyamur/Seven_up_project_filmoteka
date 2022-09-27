import axios from 'axios';
const APIKEY = 'a97f5a48286213b4292b81d1cb5cf0d2';

export default class Api {
  constructor() {
    this.query = '';
    this.totalResult = '';
    this.totlaPages = '';
  }

  async search() {
    const searchParams = new URLSearchParams({
      api_key: APIKEY,
      query: this.query,
    });

    const api = axios.create({
      baseURL: 'https://api.themoviedb.org/3/',
    });
    const result = await api.get(`search/movie?${searchParams}`);

    this.totalResult = result.data.total_results;
    this.totlaPages = result.data.total_pages;

    return result.data.results;
  }

  get searchQuery() {
    return this.query;
  }

  set searchQuery(newQuery) {
    this.query = newQuery;
  }
}
