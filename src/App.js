import './App.css';
import React from 'react';
import Profile from './components/profile/Profile';
import profileData from './data/user.json';

function App() {
  return (
    <Profile
      name={profileData.name}
      tag={profileData.tag}
      location={profileData.location}
      avatar={profileData.avatar}
      stats={profileData.stats}
    />
  );
}

export default App;
