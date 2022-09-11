import { makeObservable, observable, runInAction, action } from "mobx";
import http from "../Http/Http";

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
    try {
      const { data } = await http.get(
        "https://imdb-api.com/en/API/Top250Movies/k_eds5tnq4"
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
