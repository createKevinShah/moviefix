/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import Header from "../../Layout/Header";
import MovieList from "./MovieList";
import MovieListHeader from "./MovieListHeader";
import useGenreIds from "../../Hooks/useGenreIds";
import { useDispatch, useSelector } from "react-redux";
import { getGenres, getMoviesList } from "../../Redux/APIs/moviesAPI";
import { Footer } from "antd/es/layout/layout";

const MoveifixScreen = () => {
  const dispatch = useDispatch();
  const { defaultYear, selectedGenres } = useSelector((state) => state.movies);

  const genreIds = useGenreIds(selectedGenres);

  useEffect(() => {
    dispatch(getGenres());
    dispatch(
      getMoviesList({
        year: defaultYear,
        genres: genreIds,
      }),
    );
  }, []);

  return (
    <div className="bg-black">
      <Header />
      <div className="h-[100vh] max-h-[100vh] overflow-hidden relative">
        <MovieListHeader />
        <MovieList />
      </div>
    </div>
  );
};

export default MoveifixScreen;
