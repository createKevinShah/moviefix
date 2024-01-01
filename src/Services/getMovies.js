/* eslint-disable array-callback-return */
import axios from "axios";

const getMovies = ({
  setLoading,
  year,
  setMovies,
  selectedGenres,
  fetchInReverse,
  shouldRetainPreviousMovies = true,
}) => {
  try {
    setLoading(true);
    axios
      .get(`${process.env.REACT_APP_MOVIE_API_URL}/discover/movie`, {
        params: {
          api_key: process.env.REACT_APP_MOVIE_API_KEY,
          sort_by: "popularity.desc",
          primary_release_year: year,
          page: 1,
          "vote_count.gte": "100",
          with_genres: selectedGenres,
        },
      })
      .then((res) => {
        // console.log(res.data, "check results");
        // if (fetchInReverse) {
        //   setMovies((prev) => {
        //     return new Set([...res.data.results, prev]);
        //   });
        // }
        //  else {

        if (selectedGenres) {
          const result = [{ year, movieList: res.data.results }];
          setMovies(result);
        } else {
          setMovies((prev) => {
            if (shouldRetainPreviousMovies) {
              return [...prev, { year, movieList: res.data.results }];
            }
            return [{ year, movieList: res.data.results }];
          });
        }
        // }
        setLoading(false);
      });
  } catch (err) {
    console.log(err, "movie api error");
  }
};

export const searchMovies = (searchKey, setFilteredMovies) => {
  try {
    axios
      .get(`${process.env.REACT_APP_MOVIE_API_URL}/search/movie`, {
        params: {
          api_key: process.env.REACT_APP_MOVIE_API_KEY,
          query: searchKey,
        },
      })
      .then((res) => {
        let result = [];

        result.push({
          year: null,
          movieList: res.data.results,
        });

        console.log(result, "check search results");
        setFilteredMovies(result);
      });
  } catch (err) {
    console.log(err, "search movie error");
  }
};

export default getMovies;
