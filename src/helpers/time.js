export const secondsTotime = timeInSeconds => {
  const pad = (num, size) => ('000' + num).slice(size * -1);
  const time = parseFloat(timeInSeconds).toFixed(3);
  const minutes = Math.floor(time / 60) % 60;
  const seconds = Math.floor(time - minutes * 60);

  return `${minutes}:${pad(seconds, 2)}`;
};