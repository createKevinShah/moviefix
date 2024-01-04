/* eslint-disable array-callback-return */
import { createSlice } from "@reduxjs/toolkit";
import {
  getFilteredMovies,
  getGenres,
  getMoviesDetails,
  getMoviesList,
} from "../APIs/moviesAPI";
import checkDuplicates from "../../Utils/checkDuplicates";
import getReleaseYear from "../../Utils/getReleaseYear";

const initialState = {
  loading: false,
  moviesList: [],
  currentMovie: [],
  currentMovieDetails: [],
  previousFetchYear: 2012,
  nextFetchYear: 2012,
  defaultYear: 2012,
  genres: [],
  selectedGenres: [],
  wasFilterApplied: false,
  searchQuery: null,
  enableEntryFetch: true,
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    updateMovies: (state, action) => {
      state[action.payload.key] = action.payload.value;
    },
  },
  extraReducers(builder) {
    // get movies list
    builder.addCase(getMoviesList.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getMoviesList.fulfilled, (state, action) => {
      state.loading = false;
      state.status = "fulfilled";

      const { results } = action.payload;
      const isDuplicate = checkDuplicates(state.moviesList, results);
      const releaseYear = state.enableEntryFetch
        ? getReleaseYear(results)
        : null;

      const temp = {
        year: releaseYear,
        list: results,
      };

      let updatedMovieList = state.moviesList;
      if (releaseYear === null) {
        updatedMovieList = [temp];
      } else if (releaseYear < state.defaultYear) {
        updatedMovieList.unshift(temp);
      } else if (releaseYear > state.defaultYear) {
        updatedMovieList.push(temp);
      } else {
        updatedMovieList = [temp];
      }

      if (!isDuplicate) {
        state.moviesList = [...updatedMovieList];
      }
    });
    builder.addCase(getMoviesList.rejected, (state, action) => {
      state.loading = false;
      state.status = "rejected";
      state.moviesList = [];
      state.error = action.error;
    });

    // get genres
    builder.addCase(getGenres.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getGenres.fulfilled, (state, action) => {
      state.loading = false;
      state.status = "fulfilled";

      const { genres } = action.payload;
      state.genres = genres;
    });
    builder.addCase(getGenres.rejected, (state, action) => {
      state.loading = false;
      state.status = "rejected";
      state.genres = [];
      state.error = action.error;
    });

    // get filtered movies
    builder.addCase(getFilteredMovies.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getFilteredMovies.fulfilled, (state, action) => {
      state.loading = false;
      state.status = "fulfilled";

      const { results } = action.payload;
      state.moviesList = [{ year: null, list: results }];
    });
    builder.addCase(getFilteredMovies.rejected, (state, action) => {
      state.loading = false;
      state.status = "rejected";
      state.error = action.error;
    });

    // get Movie Details
    builder.addCase(getMoviesDetails.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getMoviesDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.status = "fulfilled";
      state.currentMovieDetails = action.payload;
    });
    builder.addCase(getMoviesDetails.rejected, (state, action) => {
      state.loading = false;
      state.status = "rejected";
      state.error = action.error;
    });
  },
});

export const { updateMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
