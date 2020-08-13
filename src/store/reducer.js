const initialState = {
  playing: false,
  repeat: false,
  shuffle: false,
  songs: [],
  currentSongIndex: 0,
  currentSongTime: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SONGS_LOADED':
      return { ...state, songs: action.payload };

    case 'SET_PLAYING':
      return { ...state, playing: action.payload };

    case 'SET_SHUFFLE':
      return { ...state, shuffle: action.payload };

    case 'SET_REPEAT':
      return { ...state, repeat: action.payload }

    case 'SET_CURRENT_SONG':
      return {
        ...state,
        currentSongIndex: action.payload,
        currentSongTime: 0
      }

    case 'SET_SONG_TIME':
      return { ...state, currentSongTime: action.payload }

    default:
      return state;
  }
};

export default reducer;