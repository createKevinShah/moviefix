const checkDuplicates = (arr1, arr2) => {
  const isDuplicate = arr1.some((movie) => {
    return JSON.stringify(movie.list) === JSON.stringify(arr2);
  });

  return isDuplicate;
};

export default checkDuplicates;
