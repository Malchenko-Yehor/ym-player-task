import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPlaying, shuffleOn, shuffleOff, repeatOn, repeatOff } from '../../store/actions';
import classnames from 'classnames';

import { ReactComponent as ShuffleIcon } from '../../assets/images/shuffle_ico.svg';
import { ReactComponent as PreviousIcon } from '../../assets/images/previous_ico.svg';
import { ReactComponent as NextIcon } from '../../assets/images/next_ico.svg';
import { ReactComponent as RepeatIcon } from '../../assets/images/repeat_ico.svg';
import playInactive from '../../assets/images/Play_inactive.png';
import playActive from '../../assets/images/Play_active.png';

import './PlayerButtons.scss'

export const ShuffleButton = () => {
  const dispatch = useDispatch();
  const shuffle = useSelector(state => state.shuffle);
  const shuffleButtonClass = classnames('shuffle-button', { 'is-active': shuffle });

  const onShuffleClick = () => {
    if (shuffle) dispatch(shuffleOff())
    else dispatch(shuffleOn());
  };

  return (
    <button className={shuffleButtonClass} onClick={onShuffleClick}>
      <ShuffleIcon title="shuffle" />
    </button>
  )
};

export const PreviousSongButton = () => {
  return (
    <button className="previous-song-button">
      <PreviousIcon title="previous" />
    </button>
  )
};

export const NextSongButton = () => {
  return (
    <button className="next-song-button">
      <NextIcon title="next" />
    </button>
  )
};

export const PlayButton = () => {
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

export const RepeatButton = () => {
  const dispatch = useDispatch();
  const repeat = useSelector(state => state.repeat);
  const shuffleButtonClass = classnames('repeat-button', { 'is-active': repeat });

  const onRepeatClick = () => {
    if (repeat) dispatch(repeatOff())
    else dispatch(repeatOn());
  };

  return (
    <button className={shuffleButtonClass} onClick={onRepeatClick}>
      <RepeatIcon title="repeat" />
    </button>
  )
};
