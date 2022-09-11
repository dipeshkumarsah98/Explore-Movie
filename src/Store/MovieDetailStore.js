import { action, makeObservable, observable, runInAction } from "mobx";
import http from "../Http/Http";

class MovieDetailStore {
  movie = {};
  isLoading = true;
  errors = "";
  constructor() {
    makeObservable(this, {
      movie: observable,
      isLoading: observable,
      errors: observable,
      getMovie: action,
    });
  }
  getMovie = async (id) => {
    try {
      const { data } = await http.get(
        `https://imdb-api.com/en/API/Title/k_eds5tnq4/${id}`
      );
      runInAction(() => {
        this.movie = data;
        this.errors = data.errorMessage;
        this.isLoading = false;
      });
    } catch (error) {
      console.log("error:::", error);
    }
  };
}
const movieDetailStore = new MovieDetailStore();
export default movieDetailStore;
