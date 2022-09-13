import { action, makeObservable, observable, runInAction } from "mobx";
import http from "../Http/Http";
import getApi from "../Utils/getApi";

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
    // kumardipesh
    try {
      const api = getApi();
      const { data } = await http.get(
        `https://imdb-api.com/en/API/MostPopularMovies/${api}`
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
