import React, { useState } from "react";
import Header from "../../Layout/Header";
import MovieList from "./MovieList";
import MovieListHeader from "./MovieListHeader";

const MoveifixScreen = () => {
  const [search, setSearch] = useState("");
  const [selectedFilter, setSelectedFilter] = useState([]);

  return (
    <div className="primary-layout">
      <Header />
      <MovieListHeader
        search={search}
        setSearch={setSearch}
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      <MovieList />
    </div>
  );
};

export default MoveifixScreen;
