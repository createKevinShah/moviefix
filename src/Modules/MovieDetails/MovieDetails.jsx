import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Spin } from "antd";
import CustomButton from "../../Components/CustomButton";
import BlankProfile from "../../Assets/Icons/BlankProfile";
import RuntimeSvg from "../../Assets/Icons/RuntimeSvg";
import useRuntime from "../../Hooks/useRuntime";
import Header from "../../Layout/Header";
import { getMoviesDetails } from "../../Redux/APIs/moviesAPI";
import { useDispatch, useSelector } from "react-redux";

const Cast = ({ credits }) => {
  return (
    <div className="flex flex-wrap w-full bg-black gap-y-3">
      {credits?.cast?.map((person) => {
        return (
          <div
            key={person.id}
            className="flex flex-col items-center text-grey-10"
          >
            <div className="w-[170px] max-w-[180px] h-[150px]">
              {person.profile_path !== null ? (
                <img
                  src={`${process.env.REACT_APP_POSTER_URL}${person.profile_path}`}
                  alt={person.name}
                  className="object-contain w-full h-full"
                />
              ) : (
                <div className="flex items-center justify-center w-full h-full">
                  <BlankProfile />
                </div>
              )}
            </div>
            <p className="mt-3 text-base font-normal text-center max-w-40">
              {person.name}
            </p>
            <p className="mt-0.5 max-w-40 text-center text-sm font-light">
              ({person.character})
            </p>
          </div>
        );
      })}
    </div>
  );
};

const MovieDetails = () => {
  const searchParams = useParams();
  const { id } = searchParams;

  const dispatch = useDispatch();
  const { loading, currentMovieDetails } = useSelector((state) => state.movies);

  const { title, tagline, runtime, poster_path, overview, genres, credits } =
    currentMovieDetails;

  const getDirector = (credits) => {
    const director = credits?.crew?.find(
      (person) => person.known_for_department === "Directing",
    );

    return director?.name || "--";
  };

  const totalRuntime = useRuntime(runtime);

  useEffect(() => {
    dispatch(getMoviesDetails({ movieId: id }));
  }, [id, dispatch]);

  return (
    <div className="bg-black w-full h-[100vh]">
      <Header />
      <div className="primary-layout pt-[120px]">
        {loading ? (
          <div className="flex items-center justify-center">
            <Spin spinning />
          </div>
        ) : (
          <div className="flex flex-col items-start px-4 font-normal bg-black md:flex-row md:px-0 gap-x-10 text-grey-10">
            <div className="rounded-lg w-full md:w-[50%] h-full">
              <img
                src={`${process.env.REACT_APP_POSTER_URL}${poster_path}`}
                alt={title}
                className="w-[90vw] h-[60vh] md:h-[80vh] object-conver rounded-lg"
              />
            </div>

            <div className="w-full mt-4 md:mt-0 md:w-[50%] h-full md:h-[80vh] flex flex-col gap-y-2">
              <div>
                <h2 className="text-3xl font-medium">{title}</h2>
                <h3 className="mt-2 text-xl italic font-light text-grey-50">
                  {tagline}
                </h3>
                <div className="flex items-center mt-3 gap-x-2">
                  <RuntimeSvg className="text-grey-50" />
                  <p className="text-sm font-light">{totalRuntime}</p>
                </div>
              </div>
              <div className="mt-3">
                <p className="text-xl font-semibold">Description :</p>
                <p className="pt-1 text-base text-justify md:text-left">
                  {overview}
                </p>
              </div>
              <div className="mt-3">
                <p className="text-xl font-semibold">Director :</p>
                <p className="pt-1 text-base">{getDirector(credits)}</p>
              </div>
              <p className="text-xl font-semibold">Cast :</p>
              <div className="h-[50%] overflow-y-scroll scroll-hide">
                <Cast credits={credits} />
              </div>
              <p className="mt-2 text-xl font-semibold">Genres :</p>
              <div className="flex flex-wrap items-center gap-4 mb-8 md:mb-0">
                {genres?.map((genre) => {
                  return (
                    <div key={genre.id}>
                      <CustomButton text={genre.name} disableSelection />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieDetails;
