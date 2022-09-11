import React, { useEffect, useState } from "react";
import { Carousel } from "flowbite-react";
import CircularCard from "./CircularCard";
import { observer } from "mobx-react-lite";

const Slider = ({ actorsList }) => {
  const [actors, setActors] = useState([]);
  useEffect(() => {
    setActors(actorsList);
  }, [actorsList]);

  return (
    <Carousel
      indicators={false}
      leftControl={" "}
      rightControl={" "}
      slide={false}
    >
      {actors?.map((actor) => (
        <CircularCard actor={actor} key={actor.id} />
      ))}
    </Carousel>
  );
};

export default observer(Slider);
