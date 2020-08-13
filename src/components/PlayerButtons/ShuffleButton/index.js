import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setShuffle } from 'store/actions';
import classnames from 'classnames';

import { ReactComponent as ShuffleIcon } from 'assets/images/shuffle_ico.svg';

import './ShuffleButton.scss'

const ShuffleButton = () => {
  const dispatch = useDispatch();
  const shuffle = useSelector(state => state.shuffle);
  const shuffleButtonClass = classnames('shuffle-button', { 'is-active': shuffle });
  const onShuffleClick = () => dispatch(setShuffle(!shuffle));

  return (
    <button className={shuffleButtonClass} onClick={onShuffleClick}>
      <ShuffleIcon title="shuffle" />
    </button>
  )
};

export default ShuffleButton;