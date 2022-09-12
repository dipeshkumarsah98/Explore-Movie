import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import { toJS } from "mobx";
import { Loading } from "../Components/Loading";
import movieDetailStore from "../Store/MovieDetailStore";
import Movie from "../Components/movieDetail/Movie";
import ErrorMessage from "../Components/ErrorMessage";

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { id: movieId } = useParams();

  useEffect(() => {
    getMovie(movieId);
  }, [movieId]);

  const getMovie = async (id) => {
    await movieDetailStore.getMovie(id);
    const data = toJS(movieDetailStore.movie);
    setMovie(data);
  };

  if (movieDetailStore?.isLoading) return <Loading />;
  if (movieDetailStore?.errors)
    return <ErrorMessage error={movieDetailStore.errors} />;

  return movieDetailStore?.errors ? (
    <p className="text-red-500 h-[70vh] text-lg text-center">
      {movieDetailStore.errors}
    </p>
  ) : (
    <div className="bg-gradient-to-r from-[#3B9AE1]/70 to-[#21E1E1]/70 py-10">
      <Movie movie={movie} />
    </div>
  );
};

export default observer(MovieDetails);
