import { action, makeObservable, observable, runInAction } from "mobx";
import http from "../Http/Http";

class SearchMovieStore {
  movieList = [];
  isLoading = true;
  error = "";
  constructor() {
    makeObservable(this, {
      movieList: observable,
      isLoading: observable,
      error: observable,
      searchMovie: action,
    });
  }
  async searchMovie(expression) {
    // kumardipesh3
    try {
      const endPoint = `https://imdb-api.com/en/API/SearchMovie/k_u9j9sghh/${expression}`;
      console.log(endPoint);
      const { data } = await http.get(endPoint);
      runInAction(() => {
        this.movieList = data;
        this.error = data.errorMessage;
        this.isLoading = false;
      });
    } catch (error) {
      console.log("Error:::", error);
    }
  }
}

const searchMovieStore = new SearchMovieStore();
export default searchMovieStore;
