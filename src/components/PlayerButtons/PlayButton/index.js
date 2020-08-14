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
  const playButtonClass = classnames('play-button', { 'is-active': playing });

  const onPlayClick = () => {
    dispatch(setPlaying(!playing))
  };

  return (
    <button className={playButtonClass} onClick={onPlayClick}>
      <img className="play-button__icon" src={playInactive} alt="play" />
      <img className="play-button__icon play-button__icon--active" src={playActive} alt="play" />
    </button>
  )
};

export default PlayButton;