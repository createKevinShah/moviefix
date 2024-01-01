import React, { useCallback, useRef } from "react";
import CustomCard from "../../Components/CustomCard";
import { useNavigate } from "react-router-dom";
import EmptyState from "./EmptyState";
import { useDispatch, useSelector } from "react-redux";
import { updateMovies } from "../../Redux/slices/movies.slice";
import { getMoviesList } from "../../Redux/APIs/moviesAPI";

const MovieList = ({ movieListRef }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { moviesList, previousFetchYear, nextFetchYear, enableEntryFetch } =
    useSelector((state) => state.movies);

  const lastRowObserver = useRef();
  const scrollRefByYear = useRef([]);
  let lastMovieRow = useCallback(
    (lastNode) => {
      if (lastRowObserver.current) {
        lastRowObserver.current.disconnect();
      }

      lastRowObserver.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && nextFetchYear !== 2023) {
          // console.log(lastNode, "last row visible");
          // setYear((prev) => prev + 1);

          dispatch(
            getMoviesList({
              year: nextFetchYear + 1,
            }),
          );

          dispatch(
            updateMovies({ key: "nextFetchYear", value: nextFetchYear + 1 }),
          );
        }
      });

      if (lastNode) {
        lastRowObserver.current.observe(lastNode);
      }
    },

    [nextFetchYear],
  );

  const handleClick = (currentMovie) => {
    navigate(`/movie/${currentMovie.id}`);
  };

  const handleScroll = async (e) => {
    let element = e.target;
    console.log(e, "check e");
    if (enableEntryFetch) {
      if (element.scrollTop === 0) {
        await dispatch(
          getMoviesList({
            year: previousFetchYear - 1,
          }),
        );
        await dispatch(
          updateMovies({
            key: "previousFetchYear",
            value: previousFetchYear - 1,
          }),
        );

        if (scrollRefByYear?.current.length > 0) {
          console.log(previousFetchYear, "check prev year");
          scrollRefByYear?.current[previousFetchYear]?.scrollIntoView({
            block: "center",
          });
        }
        setTimeout(() => {}, 200);
        console.log("time to fetch older movies");
      }
    }
  };

  console.log(moviesList, "check movies");

  return (
    <div
      className="h-full pt-[80px] pb-[80px] md:pb-[160px] mx-2 md:ml-10 overflow-y-scroll scroll-hide"
      onScroll={handleScroll}
      ref={movieListRef}
    >
      <div className="pb-8 md:pb-10 primary-layout">
        {moviesList?.map((movie) => (
          <div key={`title-start-${movie.year}`}>
            <div
              key={`title-${movie.year}`}
              className="mt-6 text-grey-10 font-semibold md:font-normal text-2xl px-4"
              ref={(ref) => (scrollRefByYear.current[movie.year] = ref)}
            >
              {movie.year}
            </div>

            <div className="mt-4 md:mt-8 flex items-center justify-center gap-6 flex-wrap">
              {movie.list.length === 0 ? (
                <EmptyState />
              ) : (
                movie.list.map((item, index) => {
                  return (
                    <>
                      <div
                        key={item.title}
                        ref={(ref) => {
                          if (
                            index !== movie.list.length - 1 ||
                            !enableEntryFetch
                          ) {
                            return null;
                          }
                          lastMovieRow(ref);
                        }}
                      >
                        <CustomCard
                          title={item.title}
                          image={item.poster_path}
                          ratings={item.vote_average}
                          onClick={() => handleClick(item)}
                        />
                      </div>
                      )
                    </>
                  );
                })
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
