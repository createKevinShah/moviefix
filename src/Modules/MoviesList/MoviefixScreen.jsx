/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from "react";
import Header from "../../Layout/Header";
import MovieList from "./MovieList";
import MovieListHeader from "./MovieListHeader";
import { useDispatch, useSelector } from "react-redux";
import { getGenres, getMoviesList } from "../../Redux/APIs/moviesAPI";

const MoveifixScreen = () => {
  const dispatch = useDispatch();
  const { defaultYear } = useSelector((state) => state.movies);

  const movieListRef = useRef();

  useEffect(() => {
    dispatch(getGenres());
    dispatch(
      getMoviesList({
        year: defaultYear,
      }),
    );
  }, []);

  return (
    <div className="bg-black">
      <Header />
      <div className="h-[100vh] max-h-[100vh] overflow-hidden relative">
        <MovieListHeader movieListRef={movieListRef} />
        <MovieList movieListRef={movieListRef} />
      </div>
    </div>
  );
};

export default MoveifixScreen;
