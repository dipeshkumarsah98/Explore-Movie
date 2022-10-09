import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { ClipLoader } from "react-spinners";
import "react-lazy-load-image-component/src/effects/blur.css";

const MovieCard = ({ movie }) => {
  const [isLoading, setIsLoading] = useState(true);

  const FakeLoading = () => <ClipLoader color="#fffff" size={20} />;

  const imageLoader = (action) => {
    setIsLoading(action);
    console.log("calling " + movie.title);
  };

  const RatingStar = ({ children }) => {
    return (
      <span className="flex gap-2 items-center">
        <AiFillStar className="text-orange-300" /> {children}
      </span>
    );
  };

  const Loading = () => {
    return <FakeLoading className="w-32 md:w-52 bg-slate-400" />;
  };

  return (
    <Link to={`/movie/${movie.id}`}>
      <div className="w-32 ml-10 font-openSans font-semibold md:my-3 md:h-96 lg:w-52 cursor-pointer drop-shadow-lg ">
        <Loading className={isLoading ? "block" : "hidden"} />
        <LazyLoadImage
          alt={"alter"}
          className="w-32 md:w-52"
          effect="blur"
          src={movie.image}
          placeholderSrc="hello"
          color="blue"
          onLoad={() => imageLoader(false)}
          style={{ visibility: isLoading ? "hidden" : "visible" }}
        />

        <div className="flex  justify-between px-1  bg-blue-400 text-white lg:font-bold lg:font-mono md:text-base md:px-1">
          <RatingStar lable={movie.imDbRating} />
        </div>
        <h1 className="px-1 text-base md:px-1 md:text-lg my-2 text-center">
          {movie.title}
        </h1>
      </div>
    </Link>
  );
};

export default observer(MovieCard);
