/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useEffect, useState } from "react";
import Header from "../../Layout/Header";
import MovieList from "./MovieList";
import MovieListHeader from "./MovieListHeader";
import getGenres from "../../Services/getGenres";
import getMovies, { searchMovies } from "../../Services/getMovies";
import useGenreIds from "../../Hooks/useGenreIds";

export const MyContext = createContext("");

const MoveifixScreen = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [year, setYear] = useState(2023);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [genres, setGenres] = useState([]);
  const [search, setSearch] = useState("");
  const [debouncedSearchValue, setDebouncedSearchValue] = useState("");
  const [selectedGenre, setSelectedGenre] = useState([]);

  const genreIds = useGenreIds(selectedGenre);

  useEffect(() => {
    getMovies(year, currentPage, setMovies, setTotalPages);
    getGenres(setGenres);
  }, []);

  useEffect(() => {
    if (selectedGenre.length > 0) {
      getMovies(year, currentPage, setMovies, setTotalPages, genreIds);
    }
  }, [selectedGenre]);

  useEffect(() => {
    if (debouncedSearchValue !== "") {
      searchMovies(debouncedSearchValue, setMovies);
    } else {
      getMovies(year, currentPage, setMovies, setTotalPages);
    }
  }, [debouncedSearchValue]);

  console.log(movies, "movie details");

  return (
    <div className="bg-black">
      <div className="primary-layout relative">
        <MyContext.Provider
          value={{
            year,
            currentPage,
            setTotalPages,
            movies,
            setMovies,
            genres,
            search,
            setSearch,
            selectedGenre,
            setSelectedGenre,
            debouncedSearchValue,
            setDebouncedSearchValue,
          }}
        >
          <Header />
          <MovieListHeader />
          <MovieList />
        </MyContext.Provider>
      </div>
    </div>
  );
};

export default MoveifixScreen;
