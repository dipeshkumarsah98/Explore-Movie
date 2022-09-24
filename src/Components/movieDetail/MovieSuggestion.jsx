import { observer } from "mobx-react-lite";
import React from "react";
import MovieSlider from "./MovieSlider";

const MovieSuggestion = ({ movie }) => {
  return <MovieSlider suggestedMovies={movie} />;
};

export default observer(MovieSuggestion);
