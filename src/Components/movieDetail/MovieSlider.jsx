import { Carousel } from "flowbite-react";
import { observer } from "mobx-react-lite";
import React from "react";
import MovieCard from "./MovieCard";

const MovieSlider = ({ suggestedMovies }) => {
  //  img, rating, year, title
  return (
    <div>
      <Carousel
        slide={false}
        indicators="false"
        leftControl=" "
        rightControl=" "
      >
        {suggestedMovies?.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </Carousel>
    </div>
  );
};

export default observer(MovieSlider);
