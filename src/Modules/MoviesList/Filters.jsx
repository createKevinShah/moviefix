import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { updateMovies } from "../../Redux/slices/movies.slice";
import CustomButton from "../../Components/CustomButton";

const Filters = () => {
  // const { genres, selectedGenre, setSelectedGenre } = useContext(MyContext);

  const dispatch = useDispatch();
  const { genres, selectedGenres } = useSelector((state) => state.movies);

  const handleClick = (id) => {
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
      // setSelectedGenre([...selectedGenre, id]);
    }

    // dispatch(
    //   updateMovies({
    //     key: "moviesList",
    //     value: moviesList.map((movies) =>
    //       movies.list.filter((individualMovie) =>
    //         individualMovie.genre_ids.some((genreId) =>
    //           selectedGenres.includes(genreId),
    //         ),
    //       ),
    //     ),
    //   }),
    // );
  };

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
