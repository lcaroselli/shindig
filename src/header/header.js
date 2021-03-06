import React from 'react';
/* eslint-disable no-warning, jsx-a11y/no-static-element-interactions */
/* eslint-disable no-warning, react/self-closing-comp */

const Header = ({ displayNavigation }) => (
  <div className="header-outer-container">
    <div className="header-inner-container" onClick={displayNavigation}>
      <h1 className="header-title flicker3">
          S<span className="flicker2">hi</span>nd<span className="flicker1">i</span>g
      </h1>
      <div className="menu-icon">
        <div className="menu-bar"></div>
        <div className="menu-bar"></div>
        <div className="menu-bar"></div>
      </div>
    </div>
  </div>
  );

export default Header;
