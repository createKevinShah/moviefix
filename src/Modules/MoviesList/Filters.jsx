import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { updateMovies } from "../../Redux/slices/movies.slice";
import CustomButton from "../../Components/CustomButton";
import { getMoviesList } from "../../Redux/APIs/moviesAPI";
import useGenreIds from "../../Hooks/useGenreIds";

const Filters = ({ movieListRef }) => {
  const dispatch = useDispatch();
  const { wasFilterApplied, genres, selectedGenres, defaultYear } = useSelector(
    (state) => state.movies,
  );
  const genreIds = useGenreIds(selectedGenres);

  const handleClick = (id) => {
    dispatch(updateMovies({ key: "wasFilterApplied", value: true }));

    if (selectedGenres.includes(id)) {
      dispatch(
        updateMovies({
          key: "selectedGenres",
          value: selectedGenres.filter((genre) => genre !== id),
        }),
      );
    } else {
      dispatch(
        updateMovies({
          key: "selectedGenres",
          value: [...selectedGenres, id],
        }),
      );
    }
  };

  const handleFilters = () => {
    if (selectedGenres.length > 0) {
      movieListRef?.current.scroll({
        top: 10,
        behavior: "smooth",
      });
      dispatch(updateMovies({ key: "enableEntryFetch", value: false }));
      dispatch(
        getMoviesList({
          genres: genreIds,
        }),
      );
    } else {
      if (wasFilterApplied) {
        dispatch(updateMovies({ key: "wasFilterApplied", value: false }));
        dispatch(updateMovies({ key: "enableEntryFetch", value: true }));
        dispatch(getMoviesList({ year: defaultYear }));
        movieListRef?.current.scroll({
          top: 10,
          behavior: "smooth",
        });
      }
    }
  };

  useEffect(() => {
    handleFilters();
  }, [selectedGenres]);

  return (
    <div className="flex items-center justify-start w-[97%] overflow-x-scroll scroll-hide gap-x-4">
      {genres?.map((genre) => {
        return (
          <motion.div
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.9 }}
            key={genre.id}
          >
            <CustomButton
              text={genre.name}
              isSelected={selectedGenres.includes(genre.id)}
              onClick={() => handleClick(genre.id)}
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default Filters;
