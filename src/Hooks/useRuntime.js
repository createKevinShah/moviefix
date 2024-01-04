const useRuntime = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  const hoursText = hours > 0 ? `${hours}h` : "0h";
  const minutesText = remainingMinutes > 0 ? ` ${remainingMinutes}m` : "0m";

  return `${hoursText} ${minutesText}`;
};

export default useRuntime;
