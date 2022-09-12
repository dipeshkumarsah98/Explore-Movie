import { toJS } from "mobx";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ErrorMessage from "../Components/ErrorMessage";
import { Loading } from "../Components/Loading";
import CardList from "../Components/PopularMovies/CardList";
import searchMovieStore from "../Store/SearchMovieStore";

const SearchResult = () => {
  const [movieList, setMovieList] = useState([]);
  const { expression } = useParams();

  useEffect(() => {
    getMovies(expression);
    console.log(expression);
  }, [expression]);

  const getMovies = async (param) => {
    await searchMovieStore.searchMovie(param);
    const movies = toJS(searchMovieStore.movieList);
    const filtered = movies?.results?.map((movie) => {
      return {
        id: movie.id,
        img: movie.image,
        title: movie.title,
      };
    });

    setMovieList(filtered);
  };

  if (searchMovieStore.isLoading) return <Loading />;
  if (searchMovieStore.error)
    return <ErrorMessage error={searchMovieStore.error} />;

  return (
    <>
      <div className="py-10 bg-gradient-to-r from-violet-500/30 to-blue-500/70">
        <div className="container">
          <h1 className="text-xl font-bold text-white font-roboto md:text-4xl xl:text-5xl mb-3">
            Search Result for {expression}
          </h1>
          <CardList movieList={movieList} />
        </div>
      </div>
    </>
  );
};

export default SearchResult;
