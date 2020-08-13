import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setRepeat } from 'store/actions';
import classnames from 'classnames';

import { ReactComponent as RepeatIcon } from 'assets/images/repeat_ico.svg';

import './RepeatButton.scss'

const RepeatButton = () => {
  const dispatch = useDispatch();
  const repeat = useSelector(state => state.repeat);
  const shuffleButtonClass = classnames('repeat-button', { 'is-active': repeat });
  const onRepeatClick = () => dispatch(setRepeat(!repeat));

  return (
    <button className={shuffleButtonClass} onClick={onRepeatClick}>
      <RepeatIcon title="repeat" />
    </button>
  )
};

export default RepeatButton;
