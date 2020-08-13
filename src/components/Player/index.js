import React from "react";
import { useCurrentSong, usePlayMusic, useLoadSongs } from 'hooks';

import SongsSlider from '../SongsSlider';
import ProgressBar from '../ProgressBar';
import ShuffleButton from '../PlayerButtons/ShuffleButton';
import PreviousSongButton from '../PlayerButtons/PreviousSongButton';
import NextSongButton from '../PlayerButtons/NextSongButton';
import PlayButton from '../PlayerButtons/PlayButton';
import RepeatButton from '../PlayerButtons/RepeatButton';

import './Player.scss'

const Player = () => {
  const currentSong = useCurrentSong();
  usePlayMusic();
  useLoadSongs();

  return (
    <div className="player">
      <SongsSlider />

      <h1 className="player__song-name">{currentSong && currentSong.name}</h1>
      <h3 className="player__author">{currentSong && currentSong.author}</h3>

      <div className="player__buttons">
        <ShuffleButton />
        <PreviousSongButton />
        <PlayButton />
        <NextSongButton />
        <RepeatButton />
      </div>

      <ProgressBar />
    </div>
  );
};

export default Player;