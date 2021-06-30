import './App.css';
import React from 'react';
import Profile from './components/Profile/Profile';
import { name, tag, location, avatar, stats } from './data/user.json';
import Statistics from './components/Statistics/Statistics';
import statisticsData from './data/stats.json';
import FriendsList from './components/FriendsList/FriendsList';
import friendsData from './data/friends.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactionsData from './data/transactions.json';

function App() {
  return (
    <>
      <Profile name={name} tag={tag} location={location} avatar={avatar} stats={stats} />
      <Statistics title="Upload stats" stats={statisticsData} />
      <FriendsList friends={friendsData} />
      <TransactionHistory transactions={transactionsData} />
    </>
  );
}

export default App;
