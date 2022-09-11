import React, { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { toJS } from "mobx";
import { Loading } from "../Components/Loading";
import upComingMoviesList from "../Store/UpComingMoivesStore";
import CardList from "../Components/PopularMovies/CardList";
import ErrorMessage from "../Components/ErrorMessage";

const ComingSoon = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);
  const getMovies = async () => {
    await upComingMoviesList.getMovies();
    const { items: moviesList } = toJS(upComingMoviesList.movieList);
    const data = moviesList?.map((movie) => {
      return {
        id: movie.id,
        img: movie.image,
        title: movie.title,
        year: movie.year,
        releaseDate: movie.releaseState,
      };
    });
    setMovies(data);
  };

  if (upComingMoviesList.isLoading) return <Loading />;
  if (upComingMoviesList.errors)
    return <ErrorMessage error={upComingMoviesList.errors} />;

  return (
    <div className="py-10 bg-gradient-to-r from-violet-500/30 to-blue-500/70">
      <div className="container">
        <h1 className="text-xl font-bold text-white font-openSans md:text-4xl xl:text-5xl mb-3">
          Upcoming Movies
        </h1>
        <CardList movieList={movies} />
      </div>
    </div>
  );
};

export default observer(ComingSoon);
