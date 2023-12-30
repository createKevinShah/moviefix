import React from "react";
import CustomSearch from "../../Components/CustomSearch";
import { Filters } from "./MovieList";
import ResetSvg from "../../Assets/Icons/ResetSvg";
import { Tooltip } from "antd";

const ResetButton = ({ setSelectedFilter }) => {
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
        className="flex items-center justify-center w-8 h-8 rounded-full bg-grey-100"
        onClick={() => setSelectedFilter([])}
      >
        <ResetSvg className="text-white" />
      </button>
    </Tooltip>
  );
};

const MovieListHeader = ({
  search,
  setSearch,
  selectedFilter,
  setSelectedFilter,
}) => {
  return (
    <div className="fixed flex flex-col gap-y-4 top-[50px] w-full primary-layout p-4 z-10 bg-black">
      <CustomSearch
        value={search}
        onChange={(e) => setSearch(e)}
        onClear={() => setSearch("")}
      />
      <div className="flex justify-between">
        <Filters
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />
        <ResetButton setSelectedFilter={setSelectedFilter} />
      </div>
    </div>
  );
};

export default MovieListHeader;
