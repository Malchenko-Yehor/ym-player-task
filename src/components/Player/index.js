import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { loadSongs } from '../../store/actions';
import fetchLocalJSON from '../../helpers/file-fetch';

import SongsSlider from '../SongsSlider';
import { ShuffleButton, PreviousSongButton, NextSongButton, PlayButton, RepeatButton } from '../PlayerButtons';

import './Player.scss'

const Player = () => {
  const songs = useSelector(state => state.songs);
  const currentSongIndex = useSelector(state => state.currentSongIndex);
  const currentSong = songs[currentSongIndex]
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchSongsData = async () => {
      const songs = await fetchLocalJSON('songs-mock.json');

      dispatch(loadSongs(songs));
    };

    fetchSongsData();
  }, []);

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
    </div>
  );
};

export default Player;