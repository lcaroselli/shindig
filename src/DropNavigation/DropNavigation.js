import React from 'react';

const DropNavigation = ( {  userPreferences, signOut }) => {

  return (
    <div className='outer-drop-nav-container'>
      <div className='drop-nav-container'>
        <button className='nav-btn'>User Profile</button>
        <button className='nav-btn' onClick={ userPreferences }>User Preferences</button>
        <button className='nav-btn'>Create an Event</button>
        <button className='nav-btn' onClick={ signOut }>Logout</button>
      </div>
    </div>
  );

}

export default DropNavigation;
