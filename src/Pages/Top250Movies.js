import React, { useEffect, useState } from "react";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import { Loading } from "../Components/Loading";
import CardList from "../Components/PopularMovies/CardList";
import topMovieListStore from "../Store/TopMoviesStore";
import ErrorMessage from "../Components/ErrorMessage";

const Top250Movies = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    await topMovieListStore.getMovies();
    const { items } = toJS(topMovieListStore.movieList);
    const MoviesList = items?.map((item) => {
      return {
        id: item.id,
        title: item.title,
        rating: item.imDbRating,
        img: item.image,
        year: item.year,
      };
    });
    setMovies(MoviesList);
  };

  if (topMovieListStore.isLoading) return <Loading />;
  if (topMovieListStore.errors)
    return <ErrorMessage error={topMovieListStore.errors} />;

  return (
    <div className="py-10 bg-gradient-to-r from-violet-500/30 to-blue-500/70">
      <div className="container">
        <h1 className="text-xl font-bold text-white font-roboto md:text-4xl xl:text-5xl mb-3">
          Top 250 Movies
        </h1>
        <CardList movieList={movies} />
      </div>
    </div>
  );
};

export default observer(Top250Movies);
