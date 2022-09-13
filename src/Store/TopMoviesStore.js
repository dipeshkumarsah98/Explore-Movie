import { makeObservable, observable, runInAction, action } from "mobx";
import http from "../Http/Http";
import getApi from "../Utils/getApi";

class TopMoviesStore {
  movieList = [];
  isLoading = true;
  errors = "";

  constructor() {
    makeObservable(this, {
      movieList: observable,
      isLoading: observable,
      errors: observable,
      getMovies: action,
    });
  }

  async getMovies() {
    // kumardipesh4
    try {
      const api = getApi();
      const { data } = await http.get(
        `https://imdb-api.com/en/API/Top250Movies/${api}`
      );
      runInAction(() => {
        this.movieList = data;
        this.errors = data.errorMessage;
        this.isLoading = false;
      });
    } catch (error) {
      console.log("Errors:::", error);
    }
  }
}

const topMovieListStore = new TopMoviesStore();
export default topMovieListStore;
