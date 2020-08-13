export const getRandomNumber = (min, max, exclude) => {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;

  return num === exclude ? getRandomNumber(min, max, exclude) : num;
}