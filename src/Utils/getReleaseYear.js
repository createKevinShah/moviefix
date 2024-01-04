const getReleaseYear = (moviesList) => {
  const date = new Date(moviesList[0].release_date);
  const year = date.getFullYear();

  return year;
};

export default getReleaseYear;
