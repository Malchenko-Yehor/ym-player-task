import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setShuffle, setShuffledSongsIndexes } from 'store/actions';
import classnames from 'classnames';

import { ReactComponent as ShuffleIcon } from 'assets/images/shuffle_ico.svg';

import './ShuffleButton.scss'
import { getsuffledSongsIndexes } from 'helpers/shuffle';

const ShuffleButton = () => {
  const dispatch = useDispatch();
  const songs = useSelector(state => state.songs);
  const currentSongIndex = useSelector(state => state.currentSongIndex);
  const shuffle = useSelector(state => state.shuffle);
  const shuffleButtonClass = classnames('shuffle-button', { 'is-active': shuffle });

  const onShuffleClick = () => {
    if (!shuffle) {
      const shuffledSongs = getsuffledSongsIndexes(songs.length, currentSongIndex);

      dispatch(setShuffledSongsIndexes(shuffledSongs));
    }
    dispatch(setShuffle(!shuffle));
  }

  return (
    <button className={shuffleButtonClass} onClick={onShuffleClick}>
      <ShuffleIcon title="shuffle" />
    </button>
  )
};

export default ShuffleButton;