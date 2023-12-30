import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getMovieDetails from "../../Services/getMovieDetails";
import { Spin } from "antd";
import CustomButton from "../../Components/CustomButton";
import BlankProfile from "../../Assets/Icons/BlankProfile";
import RuntimeSvg from "../../Assets/Icons/RuntimeSvg";
import useRuntime from "../../Hooks/useRuntime";
import Header from "../../Layout/Header";

const Cast = ({ credits }) => {
  return (
    <div className="flex flex-wrap w-full gap-y-3">
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
                  className="w-full h-full object-contain"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <BlankProfile />
                </div>
              )}
            </div>
            <p className="mt-3 max-w-40 text-center text-base font-normal">
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

  const [loading, setLoading] = useState(false);
  const [movieDetails, setMovieDetails] = useState([]);

  const { title, tagline, runtime, poster_path, overview, genres, credits } =
    movieDetails;

  const getDirector = (credits) => {
    const director = credits?.crew?.find(
      (person) => person.known_for_department === "Directing",
    );

    return director?.name || "--";
  };

  const totalRuntime = useRuntime(runtime);

  useEffect(() => {
    getMovieDetails(setMovieDetails, id, setLoading);
  }, [id]);

  return (
    <div className="bg-black w-full h-[100vh]">
      <Header />
      <div className="primary-layout pt-[120px]">
        {loading ? (
          <div className="flex items-center justify-center">
            <Spin spinning />
          </div>
        ) : (
          <div className="flex items-start gap-x-10 text-grey-10 font-normal">
            <div className="rounded-lg w-[50%]">
              <img
                src={`${process.env.REACT_APP_POSTER_URL}${poster_path}`}
                alt={title}
                className="w-full h-[80vh] object-cover rounded-lg"
              />
            </div>

            <div className="w-[50%] h-[80vh] flex flex-col gap-y-2">
              <div>
                <h2 className="font-medium text-3xl">{title}</h2>
                <h3 className="mt-2 font-light text-xl italic">{tagline}</h3>
                <div className="flex items-center gap-x-3 mt-2">
                  <RuntimeSvg className="text-grey-50" />
                  <p className="text-sm">{totalRuntime}</p>
                </div>
              </div>
              <div className="mt-3">
                <p className="font-semibold text-xl">Description :</p>
                <p className="text-base pt-1">{overview}</p>
              </div>
              <div className="mt-3">
                <p className="font-semibold text-xl">Director :</p>
                <p className="text-base pt-1">{getDirector(credits)}</p>
              </div>
              <p className="font-semibold text-xl">Cast :</p>
              <div className="h-[50%] overflow-y-scroll scroll-hide">
                <Cast credits={credits} />
              </div>
              <p className="font-semibold text-xl mt-2">Genres :</p>
              <div className="flex items-center gap-x-4">
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