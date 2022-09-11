import React, { useEffect, useState } from "react";
import { toJS } from "mobx";
import { Loading } from "../Components/Loading";
import ErrorMessage from "../Components/ErrorMessage";
import CardList from "../Components/PopularMovies/CardList";
import inTheaterMovieStore from "../Store/InTheaterMoviesStore";

const InTheaters = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    await inTheaterMovieStore.getMovies();
    const { items } = toJS(inTheaterMovieStore.movieList);
    const movieList = items?.map((movie) => {
      return {
        id: movie.id,
        title: movie.title,
        rating: movie.imDbRating,
        img: movie.image,
        year: movie.year,
      };
    });
    return setMovies(movieList);
  };

  if (inTheaterMovieStore.isLoading) return <Loading />;
  if (inTheaterMovieStore.errors)
    return <ErrorMessage error={inTheaterMovieStore.errors} />;

  return (
    <div className="py-10 bg-gradient-to-r from-violet-500/30 to-blue-500/70">
      <div className="container">
        <h1 className="text-xl font-bold text-white font-roboto md:text-4xl xl:text-5xl mb-3">
          In Theaters
        </h1>
        <CardList movieList={movies} />
      </div>
    </div>
  );
};

export default InTheaters;
