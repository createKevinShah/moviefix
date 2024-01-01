import React, { useCallback, useRef } from "react";
import CustomCard from "../../Components/CustomCard";
import { useNavigate } from "react-router-dom";
import EmptyState from "./EmptyState";
import { useDispatch, useSelector } from "react-redux";
import { updateMovies } from "../../Redux/slices/movies.slice";
import { getMoviesList } from "../../Redux/APIs/moviesAPI";
import ResetSvg from "../../Assets/Icons/ResetSvg";

const MovieList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    moviesList,
    previousFetchYear,
    nextFetchYear,
    enableEntryFetch,
    fetchOlderMoviesCTA,
  } = useSelector((state) => state.movies);

  const observer = useRef();
  const lastMovieRow = useCallback(
    (node) => {
      if (observer.current) {
        observer.current.disconnect();
      }

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && nextFetchYear !== 2023) {
          // console.log(node, "last row visible");
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

      if (node) {
        observer.current.observe(node);
      }
    },

    [nextFetchYear],
  );

  const handleClick = (currentMovie) => {
    navigate(`/movie/${currentMovie.id}`);
  };

  const handleScroll = async (e) => {
    let element = e.target;
    console.log(e, "checkelement");
    if (enableEntryFetch) {
      if (element.scrollTop === 0) {
        dispatch(updateMovies({ key: "fetchOlderMoviesCTA", value: true }));
        dispatch(updateMovies({ key: "fetchInReverseOrder", value: true }));
        dispatch(
          getMoviesList({
            year: previousFetchYear - 1,
          }),
        );
        dispatch(
          updateMovies({
            key: "previousFetchYear",
            value: previousFetchYear - 1,
          }),
        );
        setTimeout(() => {
          dispatch(updateMovies({ key: "fetchOlderMoviesCTA", value: false }));
        }, 200);
        console.log("time to fetch older movies");
      } else {
        dispatch(updateMovies({ key: "fetchInReverseOrder", value: false }));
      }
    }
  };

  console.log(moviesList, "check movies");

  return (
    <div
      className="h-full pt-[80px] pb-[80px] md:pb-[160px] overflow-y-scroll scroll-hide"
      onScroll={handleScroll}
    >
      <div className="pb-8 md:pb-10 primary-layout">
        {fetchOlderMoviesCTA && (
          <div className="flex gap-x-4 items-center justify-center">
            <ResetSvg size={24} className="text-grey-10" />
            <p className="text-grey-10 font-normal text-2xl">
              Fetching Older Movies
            </p>
          </div>
        )}
        {moviesList?.map((movie, index) => (
          <div key={index}>
            <p className="mt-6 text-grey-10 font-semibold md:font-normal text-2xl px-4 md:px-12">
              {movie.year}
            </p>

            <div className="mt-4 md:mt-8 flex items-center justify-center gap-6 flex-wrap">
              {movie.list.length === 0 ? (
                <EmptyState />
              ) : (
                movie.list.map((item, index) => {
                  return (
                    <>
                      {movie.list.length === index + 1 && enableEntryFetch ? (
                        <div key={item.id} ref={lastMovieRow}>
                          <CustomCard
                            title={item.title}
                            image={item.poster_path}
                            ratings={item.vote_average}
                            onClick={() => handleClick(item)}
                          />
                        </div>
                      ) : (
                        <div key={item.id}>
                          <CustomCard
                            title={item.title}
                            image={item.poster_path}
                            ratings={item.vote_average}
                            onClick={() => handleClick(item)}
                          />
                        </div>
                      )}
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
