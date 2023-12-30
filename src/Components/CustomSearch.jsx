import React, { useEffect } from "react";
import CrossSvg from "../Assets/Icons/CrossSvg";
import SearchSvg from "../Assets/Icons/SearchSvg";

const CustomSearch = ({
  placeholder = "Search Movies",
  value,
  setDebouncedSearchValue,
  onChange,
  onClear,
  className,
}) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedSearchValue(value);
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [value]);

  return (
    <div
      className={`flex justify-center items-center border-2 border-grey-100 w-full bg-white gap-x-3 h-[36px] mb-3 rounded-lg px-3 ${className}`}
    >
      <SearchSvg className="text-grey-100" />

      <input
        placeholder={placeholder}
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
        className="outline-none flex-1 text-base font-medium leading-18 text-black  placeholder:font-light placeholder:text-grey-100 bg-transparent"
      />
      {value?.length ? (
        <button onClick={onClear}>
          <CrossSvg className="text-grey-100" />
        </button>
      ) : null}
    </div>
  );
};

export default CustomSearch;
