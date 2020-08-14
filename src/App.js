import React from 'react';
import './App.scss';

import AlbumCover from './components/AlbumCover';
import Navigation from './components/Navigation';
import Player from './components/Player';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="app">
      <Navigation />
      <AlbumCover coverUrl="./media/images/bg_image.jpg" />
      <Player />
      <Footer />
    </div>
  );
}

export default App;
