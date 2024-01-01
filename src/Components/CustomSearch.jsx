/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateMovies } from "../Redux/slices/movies.slice";
import { getFilteredMovies, getMoviesList } from "../Redux/APIs/moviesAPI";
import CrossSvg from "../Assets/Icons/CrossSvg";
import SearchSvg from "../Assets/Icons/SearchSvg";

const CustomSearch = ({ placeholder = "Search Movies" }) => {
  const dispatch = useDispatch();
  const { defaultYear } = useSelector((state) => state.movies);
  const [search, setSearch] = useState(null);

  // function scrollToTop() {
  //   if (typeof window === "undefined") return;
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch(updateMovies({ key: "searchQuery", value: search }));
      if (search !== null && search !== "") {
        dispatch(getFilteredMovies(search));
        dispatch(updateMovies({ key: "enableEntryFetch", value: false }));
      } else {
        if (search !== null) {
          dispatch(updateMovies({ key: "moviesList", value: [] }));
          dispatch(updateMovies({ key: "enableEntryFetch", value: true }));
          dispatch(getMoviesList({ year: defaultYear }));
        }
      }
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [search]);

  return (
    <div className="flex justify-center items-center border-2 border-grey-100 w-full bg-white gap-x-3 h-[36px] mb-3 rounded-lg px-3">
      <SearchSvg className="text-grey-100" />

      <input
        placeholder={placeholder}
        value={search || ""}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        className="outline-none flex-1 text-base font-medium leading-18 text-black  placeholder:font-light placeholder:text-grey-100 bg-transparent"
      />
      {search?.length ? (
        <button onClick={() => setSearch("")}>
          <CrossSvg className="text-grey-100" />
        </button>
      ) : null}
    </div>
  );
};

export default CustomSearch;
