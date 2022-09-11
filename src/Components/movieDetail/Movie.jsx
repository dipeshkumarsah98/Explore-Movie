import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import BoxOffice from "./BoxOffice";
import MoviePlot from "./MoviePlot";
import MovieSuggestion from "./MovieSuggestion";
import Slider from "./Slider";

const Movie = ({ movie }) => {
  const [actorList, setActorList] = useState([]);
  const [boxOffice, setBoxOffice] = useState({});
  const [suggestionMovie, setSuggestionMovie] = useState([]);

  useEffect(() => {
    getData(movie);
  }, [movie]);

  const getData = (movie) => {
    setActorList(movie.actorList);
    setBoxOffice(movie.boxOffice);
    setSuggestionMovie(movie.similars);
  };
  console.log("Movie Component::", movie);

  return (
    <div className="container text-white">
      <MoviePlot movie={movie} />

      {actorList && (
        <div className=" mx-3 space-y-6 my-10">
          <h2 className="text-2xl font-openSans font-semibold  lg:text-4xl">
            {"Top cast >"}
          </h2>
          <Slider actorsList={actorList} />
        </div>
      )}
      {boxOffice && (
        <div className=" mx-3 space-y-6 my-10">
          <h2 className="text-2xl font-openSans font-semibold lg:text-4xl">
            {"Box Office Collection >"}
          </h2>
          <BoxOffice boxOffice={boxOffice} />
        </div>
      )}

      {suggestionMovie && (
        <div className=" mx-3 space-y-6 my-10">
          <h2 className="text-2xl font-openSans font-semibold lg:text-4xl">
            {"More Like This >"}
          </h2>
          <MovieSuggestion movie={suggestionMovie} />
        </div>
      )}
    </div>
  );
};

export default observer(Movie);
