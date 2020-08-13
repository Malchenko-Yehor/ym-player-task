import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPlaying } from 'store/actions';
import classnames from 'classnames';

import playInactive from 'assets/images/Play_inactive.png';
import playActive from 'assets/images/Play_active.png';

import './PlayButton.scss'

const PlayButton = () => {
  const dispatch = useDispatch();
  const playing = useSelector(state => state.playing);
  const iconUrl = playing ? playActive : playInactive;
  const playButtonClass = classnames('play-button', { 'is-active': playing });

  const onPlayClick = () => {
    dispatch(setPlaying(!playing))
  };

  return (
    <button className={playButtonClass} onClick={onPlayClick}>
      <img src={iconUrl} alt="play" />
    </button>
  )
};

export default PlayButton;