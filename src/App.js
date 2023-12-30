import React from "react";
import "./globals.css";
import MoveifixScreen from "./Modules/MoviesList/MoviefixScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetails from "./Modules/MovieDetails/MovieDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MoveifixScreen />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
