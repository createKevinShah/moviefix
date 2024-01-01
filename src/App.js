import React from "react";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MoveifixScreen from "./Modules/MoviesList/MoviefixScreen";
import MovieDetails from "./Modules/MovieDetails/MovieDetails";
import "./globals.css";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MoveifixScreen />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
