/* eslint-disable import/no-named-as-default */
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./slices/movies.slice";

const rootReducer = combineReducers({
  movies: moviesSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});
