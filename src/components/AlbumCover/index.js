import React from 'react';
import PropTypes from 'prop-types';

import './AlbumCover.scss'

const AlbumCover = ({ coverUrl }) => {
  const coverStyle = { backgroundImage: `url(${coverUrl})` };

  return <div className="album-cover" style={coverStyle}></div>;
};

AlbumCover.propTypes = {
  coverUrl: PropTypes.string.isRequired
}

export default AlbumCover;