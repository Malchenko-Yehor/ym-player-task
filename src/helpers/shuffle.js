const { array } = require("prop-types");

const shuffleArray = arr => {
  return arr.sort(() => Math.random() - 0.5);
};

export const getsuffledSongsIndexes = (songsAmount, currentSongIndex) => {
  const shuffledIndexes = [];

  for (let index = 0; index < songsAmount; index++) {
    if (index !== currentSongIndex) shuffledIndexes.push(index);
  }

  return shuffleArray(shuffledIndexes);
};

