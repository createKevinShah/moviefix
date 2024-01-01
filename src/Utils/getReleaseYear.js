import dayjs from "dayjs";

const getReleaseYear = (moviesList) => {
  return parseInt(dayjs(moviesList[0].release_date).format("YYYY"));
};

export default getReleaseYear;
