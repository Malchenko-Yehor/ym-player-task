import { act } from "react-dom/test-utils";

const initialState = {
  playing: false,
  repeat: false,
  shuffle: false,
  songs: [],
  currentSongIndex: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SONGS_LOADED':
      return { ...state, songs: action.payload };

    case 'SET_PLAYING':
      return { ...state, playing: action.payload };

    case 'SHUFFLE_ON':
      return { ...state, shuffle: true, repeat: false };

    case 'SHUFFLE_OFF':
      return { ...state, shuffle: false };

    case 'REPEAT_ON':
      return { ...state, repeat: true, shuffle: false };

    case 'REPEAT_OFF':
      return { ...state, repeat: false };

    case 'SET_CURRENT_SONG':
      return { ...state, currentSongIndex: action.payload }

    default:
      return state;
  }
};

export default reducer;