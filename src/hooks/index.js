import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { loadSongs, setSongTime, setCurrentSong, setShuffledSongsIndexes } from 'store/actions';
import fetchLocalJSON from 'helpers/file-fetch';
import { getsuffledSongsIndexes } from 'helpers/shuffle';

export const usePlayMusic = () => {
  const songs = useSelector(state => state.songs);
  const playing = useSelector(state => state.playing);
  const currentSongTime = useSelector(state => state.currentSongTime);
  const repeat = useSelector(state => state.repeat);
  const shuffle = useSelector(state => state.shuffle);
  const shuffledSongsIndexes = useSelector(state => state.shuffledSongsIndexes);
  const currentSongIndex = useSelector(state => state.currentSongIndex);
  const currentSong = songs[currentSongIndex];
  const dispatch = useDispatch();

  useEffect(() => {
    let playingInterval = null;


    if (playing) {
      playingInterval = setInterval(() => {
        dispatch(setSongTime(currentSongTime + 0.05));

        if (currentSongTime >= currentSong.duration) {
          const nextSong = currentSongIndex === songs.length - 1 ? 0 : currentSongIndex + 1;
          const nextShuffleSong = shuffledSongsIndexes[0];

          if (shuffle) {
            const restOfShuffleSongs = shuffledSongsIndexes.slice(1);

            if (!restOfShuffleSongs.length) {
              const shuffledSongsList = getsuffledSongsIndexes(songs.length, currentSongIndex);

              dispatch(setShuffledSongsIndexes(shuffledSongsList));
            } else {
              dispatch(setShuffledSongsIndexes(restOfShuffleSongs));
            }
          }

          if (repeat) {
            dispatch(setCurrentSong(currentSongIndex));
          } else if (shuffle) {
            dispatch(setCurrentSong(nextShuffleSong));
          } else {
            dispatch(setCurrentSong(nextSong));
          }
        }
      }, 50);
    } else {
      clearInterval(playingInterval);
    }

    return () => clearInterval(playingInterval);
  });
};

export const useLoadSongs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchSongsData = async () => {
      const songs = await fetchLocalJSON('songs-mock.json');

      dispatch(loadSongs(songs));
    };

    fetchSongsData();
  }, [dispatch]);
};

export const useCurrentSong = () => {
  const songs = useSelector(state => state.songs);
  const currentSongIndex = useSelector(state => state.currentSongIndex);
  const currentSong = songs[currentSongIndex];

  return currentSong;
};