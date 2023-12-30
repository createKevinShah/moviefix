import React, { useContext } from "react";
import { motion } from "framer-motion";
import CustomButton from "../../Components/CustomButton";
import CustomCard from "../../Components/CustomCard";
import { useNavigate } from "react-router-dom";
import { MyContext } from "./MoviefixScreen";

export const Filters = () => {
  const { genres, selectedGenre, setSelectedGenre } = useContext(MyContext);

  const handleClick = (id) => {
    if (selectedGenre.includes(id)) {
      setSelectedGenre(selectedGenre?.filter((item) => item !== id));
    } else {
      setSelectedGenre([...selectedGenre, id]);
    }
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
              isSelected={selectedGenre.includes(genre.id)}
              onClick={() => handleClick(genre.id)}
            />
          </motion.div>
        );
      })}
    </div>
  );
};

const MovieList = () => {
  const { year, movies, debouncedSearchValue } = useContext(MyContext);
  const navigate = useNavigate();

  const handleClick = (currentMovie) => {
    navigate(`/movie/${currentMovie.id}`);
  };

  return (
    <div className="py-[60px] md:py-[80px] overflow-y-scroll scroll-hide">
      <div className="pb-8 md:pb-10">
        {debouncedSearchValue === "" && (
          <p className="text-grey-10 font-normal text-2xl px-16">{year}</p>
        )}
        <div className="mt-8 flex items-center justify-center gap-6 flex-wrap">
          {movies.map((movie) => {
            return (
              <div key={movie.id}>
                <CustomCard
                  title={movie.title}
                  image={movie.poster_path}
                  description={movie.overview}
                  ratings={movie.popularity}
                  onClick={() => handleClick(movie)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
