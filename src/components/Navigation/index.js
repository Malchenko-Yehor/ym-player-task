import React from 'react';
import { ReactComponent as BackIcon } from '../../assets/images/back_ico.svg';
import { ReactComponent as MoreIcon } from '../../assets/images/more_ico.svg';

import './Navigation.scss'

const Navigation = () => {

  return (
    <nav className="navigation">
      <button className="navigation__back-button">
        <BackIcon title="back-icon" />
      </button>

      <div className="navigation__wrapper">
        <h3 className="navigation__section">Album</h3>
        <h2 className="navigation__current-section">Unreleased</h2>
      </div>

      <button className="navigation__more-button">
        <MoreIcon title="more-icon" />
      </button>
    </nav>
  );
};

export default Navigation;