export const loadSongs = payload => ({ type: 'SONGS_LOADED', payload });

export const setPlaying = payload => ({ type: 'SET_PLAYING', payload });

export const setShuffle = payload => ({ type: 'SET_SHUFFLE', payload });

export const setRepeat = payload => ({ type: 'SET_REPEAT', payload });

export const setCurrentSong = payload => ({ type: 'SET_CURRENT_SONG', payload });

export const setSongTime = payload => ({ type: 'SET_SONG_TIME', payload });

