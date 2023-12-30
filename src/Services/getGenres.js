import axios from "axios";

const getGenres = (setGenres) => {
  try {
    axios
      .get(`${process.env.REACT_APP_MOVIE_API_URL}/genre/movie/list`, {
        params: {
          api_key: process.env.REACT_APP_MOVIE_API_KEY,
          language: "en",
        },
      })
      .then((res) => {
        console.log(res.data.genres);
        setGenres(res.data.genres);
      });
  } catch (err) {
    console.log(err, "genre api error");
  }
};

export default getGenres;
