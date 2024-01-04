const useGenreIds = (selectedGenres) => {
  if (selectedGenres.length === 0) {
    return;
  }

  return selectedGenres.reduce(
    (result, current) => (result = result + "," + current),
  );
};

export default useGenreIds;
