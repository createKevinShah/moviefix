import React, { useContext } from "react";
import CustomSearch from "../../Components/CustomSearch";
import { Filters } from "./MovieList";
import ResetSvg from "../../Assets/Icons/ResetSvg";
import { Tooltip } from "antd";
import { MyContext } from "./MoviefixScreen";
import getMovies from "../../Services/getMovies";

const ResetButton = () => {
  const { year, currentPage, setMovies, setTotalPages, setSelectedGenre } =
    useContext(MyContext);

  const handleReset = () => {
    getMovies(year, currentPage, setMovies, setTotalPages);
    setSelectedGenre([]);
  };

  return (
    <Tooltip
      title={
        <div className="text-grey-100 text-xs font-medium">
          Reset All Filters
        </div>
      }
      placement="bottom"
      trigger="hover"
      color="#ffffff"
    >
      <button
        className="flex items-center justify-center w-8 h-8 rounded-full bg-grey-100 mt-1 mr-2"
        onClick={handleReset}
      >
        <ResetSvg className="text-white" />
      </button>
    </Tooltip>
  );
};

const MovieListHeader = () => {
  const { search, setSearch, setDebouncedSearchValue } = useContext(MyContext);

  return (
    <div className="sticky flex flex-col gap-y-4 top-[70px] w-full primary-layout p-4 z-10 bg-black">
      <CustomSearch
        value={search}
        setDebouncedSearchValue={setDebouncedSearchValue}
        onChange={(e) => setSearch(e)}
        onClear={() => setSearch("")}
      />
      <div className="flex justify-between">
        <div className="w-[95%]">
          <Filters />
        </div>
        <ResetButton />
      </div>
    </div>
  );
};

export default MovieListHeader;
