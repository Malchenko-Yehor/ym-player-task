import React from 'react';
import { ReactComponent as PlaylistIcon } from 'assets/images/playlist_ico.svg';
import { useNextSong, useNextShuffleSong } from 'hooks';
import { useSelector } from 'react-redux';
import { secondsTotime } from 'helpers/time';

import './Footer.scss';

const Footer = () => {
  const shuffle = useSelector(state => state.shuffle);
  const nextSong = useNextSong();
  const nextShuffleSong = useNextShuffleSong();
  const song = shuffle ? nextShuffleSong : nextSong;
  const songDurationFormatted = song && secondsTotime(song.duration);

  return (
    <footer className="footer">
      <div className="footer__container">
        <button className="footer__playlist-button">
          <PlaylistIcon />
        </button>

        <div className="footer__next-song">
          <h3 className="footer__next-label">Next</h3>

          <div className="footer__wrapper">
            <span className="footer__song-name">{song && song.name}</span>
            <span className="footer__dots"></span>
            <span className="footer__song-duration">{songDurationFormatted}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;