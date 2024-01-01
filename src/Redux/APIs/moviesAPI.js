/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getMoviesList = createAsyncThunk(
  "movies/getMoviesList",
  async ({ year, genres }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_MOVIE_API_URL}/discover/movie`,
        {
          params: {
            api_key: process.env.REACT_APP_MOVIE_API_KEY,
            sort_by: "popularity.desc",
            primary_release_year: year,
            page: 1,
            "vote_count.gte": "100",
            with_genres: genres,
          },
        },
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const getGenres = createAsyncThunk(
  "movies/getGenres",
  async (params, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_MOVIE_API_URL}/genre/movie/list`,
        {
          params: {
            api_key: process.env.REACT_APP_MOVIE_API_KEY,
          },
        },
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const getFilteredMovies = createAsyncThunk(
  "movies/getFilteredMovies",
  async (searchQuery, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_MOVIE_API_URL}/search/movie`,
        {
          params: {
            api_key: process.env.REACT_APP_MOVIE_API_KEY,
            query: searchQuery,
          },
        },
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
