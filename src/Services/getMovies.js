import axios from "axios";

const getMovies = (
  year,
  currentPage,
  setMovies,
  setTotalPages,
  selectedGenres,
) => {
  try {
    axios
      .get(`${process.env.REACT_APP_MOVIE_API_URL}/discover/movie`, {
        params: {
          api_key: process.env.REACT_APP_MOVIE_API_KEY,
          sort_by: "popularity.desc",
          primary_release_year: year,
          page: currentPage,
          "vote_count.gte": "100",
          with_genres: selectedGenres,
        },
      })
      .then((res) => {
        console.log(res.data);
        setMovies(res.data.results);
        setTotalPages(res.data.total_pages);
      });
  } catch (err) {
    console.log(err, "movie api error");
  }
};

export const searchMovies = (searchKey, setMovies) => {
  try {
    axios
      .get(`${process.env.REACT_APP_MOVIE_API_URL}/search/movie`, {
        params: {
          api_key: process.env.REACT_APP_MOVIE_API_KEY,
          query: searchKey,
        },
      })
      .then((res) => {
        console.log(res.data);
        setMovies(res.data.results);
      });
  } catch (err) {
    console.log(err, "search movie error");
  }
};

export default getMovies;
