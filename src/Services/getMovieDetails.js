import axios from "axios";

const getMovieDetails = (setMovieDetails, movieId, setLoading) => {
  try {
    setLoading(true);
    axios
      .get(`${process.env.REACT_APP_MOVIE_API_URL}/movie/${movieId}`, {
        params: {
          api_key: process.env.REACT_APP_MOVIE_API_KEY,
          append_to_response: "credits",
          language: "en",
        },
      })
      .then((res) => {
        console.log(res.data, "movie details");
        setMovieDetails(res.data);
        setLoading(false);
      });
  } catch (err) {
    console.log(err, "movie api error");
  }
};

export default getMovieDetails;
