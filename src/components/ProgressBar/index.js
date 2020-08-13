import React from "react";
import { useSelector } from 'react-redux';
import { secondsTotime } from 'helpers/time';

import './ProgressBar.scss'

const ProgressBar = () => {
  const currentSongTime = useSelector(state => state.currentSongTime);
  const currentSongIndex = useSelector(state => state.currentSongIndex);
  const song = useSelector(state => state.songs)[currentSongIndex];
  const songDuration = song && secondsTotime(song.duration);
  const currentProgressStyle = { transform: `scaleX(${song ? currentSongTime / song.duration : 0})` };

  return (
    <div className="progress-bar">
      <span className="progress-bar__current-time">{secondsTotime(currentSongTime)}</span>

      <div className="progress-bar__bar">
        <div className="progress-bar__current-progress" style={currentProgressStyle}></div>
        <div className="progress-bar__progress"></div>
      </div>

      <span className="progress-bar__duration">{songDuration}</span>
    </div>
  );
};

export default ProgressBar;