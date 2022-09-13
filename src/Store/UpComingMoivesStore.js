import { action, makeObservable, observable, runInAction } from "mobx";
import http from "../Http/Http";
import getApi from "../Utils/getApi";

class UpComingMoviesStore {
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
    //kumardipesh5
    try {
      const apiKey = getApi();
      const { data } = await http.get(
        `https://imdb-api.com/en/API/ComingSoon/${apiKey}`
      );
      runInAction(() => {
        this.movieList = data;
        this.errors = data.errorMessage;
        this.isLoading = false;
      });
    } catch (error) {
      console.log("Error Message: ", error);
    }
  }
}

const upComingMoviesList = new UpComingMoviesStore();
export default upComingMoviesList;
