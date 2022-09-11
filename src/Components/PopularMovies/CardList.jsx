import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import paginate from "../../Utils/paginate";
import Pagination from "../Pagination";
import Card from "./Card";

const CardList = ({ movieList, changeLoading }) => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  var pageSize = 15;

  useEffect(() => {
    const filteredMovies = paginate(movieList, 1, 15);
    setMovies(filteredMovies);
  }, [movieList]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    const filterMovies = paginate(movieList, page, pageSize);
    setMovies(filterMovies);
  };

  const handleLoading = (isLoading) => {
    changeLoading(isLoading);
  };

  return (
    <>
      <div
        className={
          movies?.length < 6
            ? "grid grid-cols-3 gap-1 grid-flow-row h-[70vh] justify-center sm:grid-cols-4  xl:grid-cols-5 md:gap-5 xl:gap-5"
            : "grid grid-cols-3 gap-1 grid-flow-row justify-center sm:grid-cols-4  xl:grid-cols-5 md:gap-5 xl:gap-5"
        }
      >
        {movies?.map((movie) => (
          <Card
            id={movie.id}
            key={movie.id}
            title={movie.title}
            rating={movie.rating}
            img={movie.img}
            year={movie.year}
            handleLoading={handleLoading}
          />
        ))}
      </div>
      <Pagination
        totalItem={movieList?.length}
        pageChange={handlePageChange}
        currentPage={currentPage}
        pageSize={pageSize}
      />
    </>
  );
};

export default observer(CardList);
