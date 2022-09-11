import React, { useEffect, useState } from "react";
import popularMoviesStore from "../Store/PopularMoviesStore.js";
import CardList from "../Components/PopularMovies/CardList";
import ErrorMessage from "../Components/ErrorMessage";
import { observer } from "mobx-react-lite";
import { Loading } from "../Components/Loading";
import { toJS } from "mobx";

function PopularMovies() {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    getApiData();
  }, []);

  const getApiData = async () => {
    await popularMoviesStore.getPopularMoviesList();
    const popularMovies = toJS(popularMoviesStore.movieList);
    const listOfMovies = popularMovies.items?.map((row) => {
      return {
        id: row.id,
        rank: row.rank,
        title: row.title,
        img: row.image,
        year: row.year,
        rating: row.imDbRating,
        ratingCount: row.imDbRatingCount,
      };
    });
    setMoviesList(listOfMovies);
  };

  if (popularMoviesStore.isLoading) return <Loading />;
  if (popularMoviesStore.error)
    return <ErrorMessage error={popularMoviesStore.error} />;

  return (
    <>
      <div className="py-10 bg-gradient-to-r from-violet-500/30 to-blue-500/70">
        <div className="container">
          <h1 className="text-xl font-roboto font-bold text-white md:text-4xl xl:text-5xl mb-3">
            Top Popular Movies
          </h1>
          <CardList movieList={moviesList} />
        </div>
      </div>
    </>
  );
}

export default observer(PopularMovies);
