import React from "react";
import CustomSearch from "../../Components/CustomSearch";
import Filters from "./Filters";
import ResetButton from "./ResetButton";

const MovieListHeader = () => {
  return (
    <div className="sticky flex flex-col gap-y-4 top-[90px] w-full primary-layout px-4 pb-4 z-10 bg-black">
      <CustomSearch />
      <div className="flex justify-between">
        <div className="w-[91%] md:w-[95%]">
          <Filters />
        </div>
        <ResetButton />
      </div>
    </div>
  );
};

export default MovieListHeader;
