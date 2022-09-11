import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { AiFillStar } from "react-icons/ai";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";

const Card = ({ id, img, rating, year, title }) => {
  const RatingStar = ({ lable }) => {
    return (
      <span className="flex gap-2 items-center">
        <AiFillStar className="text-orange-300" /> {lable}
      </span>
    );
  };

  return (
    <Link to={`/movie/${id}`}>
      <div className="w-32 md:my-3 md:h-96 lg:w-52 cursor-pointer drop-shadow-lg ">
        <LazyLoadImage
          alt={"alter"}
          className="w-32 md:w-52"
          effect="blur"
          src={img}
          placeholderSrc="hello"
          color="blue"
        />

        <div className="flex font-openSans  justify-between px-1  bg-blue-400 text-white lg:font-bold  md:text-base md:px-1">
          <RatingStar lable={rating} /> <p className="my-auto">{year}</p>
        </div>
        <h1 className="px-1 text-sm font-semibold text-white font-openSans md:px-1 md:text-base my-2 text-center">
          {title}
        </h1>
      </div>
    </Link>
  );
};

export default Card;
