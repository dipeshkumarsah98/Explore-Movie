import { action, makeObservable, observable, runInAction } from "mobx";
import http from "../Http/Http";

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
      const { data } = await http.get(
        "https://imdb-api.com/en/API/ComingSoon/k_380fl9dm"
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
