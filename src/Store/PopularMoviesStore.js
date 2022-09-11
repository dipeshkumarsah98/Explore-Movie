import { action, makeObservable, observable, runInAction } from "mobx";
import http from "../Http/Http";

class PopularMoviesStore {
  movieList = [];
  status = "initial";
  isLoading = true;
  error = "";

  constructor() {
    makeObservable(this, {
      movieList: observable,
      status: observable,
      isLoading: observable,
      error: observable,
      getPopularMoviesList: action,
    });
  }
  async getPopularMoviesList() {
    try {
      const { data } = await http.get(
        "https://imdb-api.com/en/API/MostPopularMovies/k_eds5tnq4"
      );
      runInAction(() => {
        this.movieList = data;
        this.error = data.errorMessage;
        this.isLoading = false;
      });
    } catch (error) {
      console.log("error::", error);
    }
  }
}

const popularMoviesStore = new PopularMoviesStore();
export default popularMoviesStore;
