import { observer } from "mobx-react-lite";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const CircularCard = ({ actor }) => {
  return (
    <div className="flex flex-col font-cinzel font-semibold justify-center w-40 items-center lg:w-56 ">
      <LazyLoadImage
        alt={"alter"}
        className="rounded-full w-32 h-32 lg:w-52 lg:h-52"
        effect="blur"
        src={actor.image}
        placeholderSrc="hello"
        color="blue"
      />
      <span className="text-base lg:text-lg">{actor.name}</span>
      <p className="text-center text-[#F0EABE] text-base lg:text-lg ">
        {actor.asCharacter}
      </p>
    </div>
  );
};

export default observer(CircularCard);
