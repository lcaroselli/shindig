import React from 'react';

const Header = ( { displayNavigation }) => {

  return (
    <div className='header-outer-container'>
      <div className='header-inner-container' onClick={ displayNavigation }>
        <p className='header-the flicker2'>The</p>
        <h1 className='header-title flicker3'>S<span className='flicker2'>hi</span>nd<span className='flicker1'>i</span>g</h1>
      </div>
    </div>
  );

}

export default Header;
