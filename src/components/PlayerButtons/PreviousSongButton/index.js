import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentSong, setSongTime } from 'store/actions';

import { ReactComponent as PreviousIcon } from 'assets/images/previous_ico.svg';

import './PreviousSongButton.scss'

const PreviousSongButton = () => {
  const dispatch = useDispatch();
  const songsAmount = useSelector(state => state.songs).length;
  const currentSongIndex = useSelector(state => state.currentSongIndex);

  const onPreviousClick = () => {
    if (currentSongIndex === 0) dispatch(setCurrentSong(songsAmount - 1));
    else dispatch(setCurrentSong(currentSongIndex - 1));
  };

  return (
    <button className="previous-song-button" onClick={onPreviousClick}>
      <PreviousIcon title="previous" />
    </button>
  )
};

export default PreviousSongButton
