import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentSong, setSongTime } from 'store/actions';

import { ReactComponent as NextIcon } from 'assets/images/next_ico.svg';


import './NextSongButton.scss'


const NextSongButton = () => {
  const dispatch = useDispatch();
  const songsAmount = useSelector(state => state.songs).length;
  const currentSongIndex = useSelector(state => state.currentSongIndex);

  const onNextClick = () => {
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




