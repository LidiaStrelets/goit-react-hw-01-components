import './App.css';
import React from 'react';
import Profile from './components/profile/Profile';
import profileData from './data/user.json';
import Statistics from './components/stats-section/Statistics';
import statisticsData from './data/stats.json';
import FriendList from './components/FriendsList/Friends-List';
import friendsData from './data/friends.json';

function App() {
  return (
    <>
      <Profile
        name={profileData.name}
        tag={profileData.tag}
        location={profileData.location}
        avatar={profileData.avatar}
        stats={profileData.stats}
      />
      <Statistics title="Upload stats" stats={statisticsData} />
      <FriendList friends={friendsData} />
    </>
  );
}

export default App;
