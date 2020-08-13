import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentSong, setShuffledSongsIndexes } from 'store/actions';
import { getsuffledSongsIndexes } from 'helpers/shuffle';

import { ReactComponent as NextIcon } from 'assets/images/next_ico.svg';


import './NextSongButton.scss'


const NextSongButton = () => {
  const dispatch = useDispatch();
  const songs = useSelector(state => state.songs);
  const songsAmount = songs.length;
  const currentSongIndex = useSelector(state => state.currentSongIndex);
  const shuffle = useSelector(state => state.shuffle);
  const shuffledSongsIndexes = useSelector(state => state.shuffledSongsIndexes);
  const nextShuffleSong = shuffledSongsIndexes[0];

  const onNextClick = () => {
    if (shuffle) {
      const restOfShuffleSongs = shuffledSongsIndexes.slice(1);

      dispatch(setCurrentSong(nextShuffleSong));

      if (!restOfShuffleSongs.length) {
        const shuffledSongsList = getsuffledSongsIndexes(songs.length, currentSongIndex);

        dispatch(setShuffledSongsIndexes(shuffledSongsList));
      } else {
        dispatch(setShuffledSongsIndexes(restOfShuffleSongs));
      }

      return;
    }

    if (currentSongIndex === songsAmount - 1) dispatch(setCurrentSong(0));
    else dispatch(setCurrentSong(currentSongIndex + 1));
  };

  return (
    <button className="next-song-button" onClick={onNextClick}>
      <NextIcon title="next" />
    </button>
  )
};

export default NextSongButton;




