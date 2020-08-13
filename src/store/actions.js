export const loadSongs = payload => ({ type: 'SONGS_LOADED', payload });

export const setPlaying = payload => ({ type: 'SET_PLAYING', payload });

export const shuffleOn = () => ({ type: 'SHUFFLE_ON' });

export const shuffleOff = () => ({ type: 'SHUFFLE_OFF' });

export const repeatOn = () => ({ type: 'REPEAT_ON' });

export const repeatOff = () => ({ type: 'REPEAT_OFF' });

export const setCurrentSong = payload => ({ type: 'SET_CURRENT_SONG', payload });

