import React from "react";
import { useDispatch } from "react-redux";
import { updateMovies } from "../../Redux/slices/movies.slice";
import { Tooltip } from "antd";
import ResetSvg from "../../Assets/Icons/ResetSvg";

const ResetButton = () => {
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(updateMovies({ key: "selectedGenres", value: [] }));
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
        className="absolute bottom-5 right-2 md:right-8 flex items-center justify-center w-8 h-8 rounded-full bg-grey-100 mt-1 mr-2"
        onClick={handleReset}
      >
        <ResetSvg className="text-white" />
      </button>
    </Tooltip>
  );
};

export default ResetButton;
