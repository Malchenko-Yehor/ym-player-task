import React from 'react';
import './App.scss';

import AlbumCover from './components/AlbumCover';
import Navigation from './components/Navigation';
import Player from './components/Player';

const App = () => {
  return (
    <div className="app">
      <Navigation />
      <AlbumCover coverUrl="./media/images/bg_image.jpg" />
      <Player />
    </div>
  );
}

export default App;
