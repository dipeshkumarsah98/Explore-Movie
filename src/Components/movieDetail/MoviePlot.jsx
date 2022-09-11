import React from "react";
import { AiFillStar } from "react-icons/ai";

const MoviePlot = ({ movie }) => {
  return (
    <div className="font-roboto">
      {/* movie info */}
      <div className="lg:flex lg:justify-between mb-4">
        <div>
          <h1 className="ml-3 text-lg font-semibold font-openSans lg:text-6xl">
            {movie.title}
          </h1>
          <span className="ml-3 font-mono text-[#F0EABE] lg:mt-1 lg:text-2xl">
            {movie.year}.{movie.contentRating}.{movie.runtimeStr}
          </span>
        </div>
        <div className="hidden mx-3 my-3 text-3xl lg:flex gap-2 items-center ">
          <AiFillStar className="text-orange-500 text-4xl" />{" "}
          {`${movie.imDbRating}/10`} .
          <span className="text-[#F0EABE]">{movie.imDbRatingVotes}</span>
        </div>
      </div>
      {/* image */}
      <img src={movie.image} alt="anything" className="lg:w-screen" />

      {/* genre */}
      <ul className="flex gap-5 mx-3 mt-3 lg:text-2xl">
        {movie?.genreList?.map((genre) => (
          <li
            key={genre.key}
            className="border  border-white bg-blue-800/60 rounded-xl px-2 lg:rounded-3xl lg:px-4"
          >
            {genre.value}
          </li>
        ))}
      </ul>

      {/* movie plot */}

      <p className="mx-3 my-3 font-roboto text-justify lg:text-2xl">
        {movie.plot}
      </p>

      {/* rating */}

      <div className="mx-3 my-3 flex gap-2 items-center lg:hidden">
        <AiFillStar className="text-orange-500 text-lg" />{" "}
        {`${movie.imDbRating}/10`} .
        <span className="text-yellow-300">{movie.imDbRatingVotes}</span>
      </div>
      <hr className=" bg-white" />

      {/* crew */}

      <div className="inline-flex gap-2 my-2 mx-3 font-cinzel  lg:text-3xl lg:my-3">
        Director:
        <ul className="flex gap-5 ">
          {movie?.directorList?.map((director) => (
            <li className="" key={director.id}>
              {director.name}
            </li>
          ))}
        </ul>
      </div>
      <hr className="bg-white" />

      {/* writer */}
      <div className="inline-flex gap-2  my-2 mx-3 font-cinzel lg:text-3xl lg:my-3">
        Writer:
        <ul className="flex flex-wrap gap-1">
          {movie?.writerList?.map((writer) => (
            <li className=" mr-4 " key={writer.id}>
              {writer.name}
            </li>
          ))}
        </ul>
      </div>
      <hr className="bg-white" />

      {/* stars */}
      <div className="inline-flex gap-2 my-2 mx-3 font-cinzel  lg:text-3xl lg:my-3">
        Stars:
        <ul className="flex flex-wrap gap-1  ">
          {movie?.starList?.map((star) => (
            <li key={star.id} className=" mr-4">
              {star.name}
            </li>
          ))}
        </ul>
      </div>
      <hr className="bg-white    " />
    </div>
  );
};

export default MoviePlot;
