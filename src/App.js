import './App.css';
import React from 'react';
import Profile from './components/profile/Profile';
import { name, tag, location, avatar, stats } from './data/user.json';
import Statistics from './components/stats-section/Statistics';
import statisticsData from './data/stats.json';
import FriendList from './components/FriendsList/Friends-List';
import friendsData from './data/friends.json';
import TransactionHistory from './components/transactions/transactions';
import transactionsData from './data/transactions.json';

function App() {
  return (
    <>
      <Profile name={name} tag={tag} location={location} avatar={avatar} stats={stats} />
      <Statistics title="Upload stats" stats={statisticsData} />
      <FriendList friends={friendsData} />
      <TransactionHistory transactions={transactionsData} />
    </>
  );
}

export default App;
