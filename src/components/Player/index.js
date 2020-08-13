import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { loadSongs, setSongTime, setCurrentSong } from 'store/actions';
import fetchLocalJSON from 'helpers/file-fetch';

import SongsSlider from '../SongsSlider';
import ProgressBar from '../ProgressBar';
import ShuffleButton from '../PlayerButtons/ShuffleButton';
import PreviousSongButton from '../PlayerButtons/PreviousSongButton';
import NextSongButton from '../PlayerButtons/NextSongButton';
import PlayButton from '../PlayerButtons/PlayButton';
import RepeatButton from '../PlayerButtons/RepeatButton';

import './Player.scss'

const Player = () => {
  const songs = useSelector(state => state.songs);
  const playing = useSelector(state => state.playing);
  const currentSongIndex = useSelector(state => state.currentSongIndex);
  const currentSongTime = useSelector(state => state.currentSongTime);
  const currentSong = songs[currentSongIndex];
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchSongsData = async () => {
      const songs = await fetchLocalJSON('songs-mock.json');

      dispatch(loadSongs(songs));
    };

    fetchSongsData();
  }, [dispatch]);

  useEffect(() => {
    let playingInterval = null;

    if (playing) {
      playingInterval = setInterval(() => {
        dispatch(setSongTime(currentSongTime + 1));

        if (currentSongTime >= currentSong.duration) {
          dispatch(setCurrentSong(currentSongIndex + 1))
        }
      }, 1000);
    } else {
      clearInterval(playingInterval);
    }

    return () => clearInterval(playingInterval);
  }, [playing, currentSongTime, currentSongIndex]);

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