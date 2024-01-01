const findLatestEntry = (movies) => {
  const latestEntry = movies.reduce(
    (result, current) => {
      return result < current ? current : result;
    },
    [movies[0].year],
  );

  return latestEntry.year;
};

export default findLatestEntry;
