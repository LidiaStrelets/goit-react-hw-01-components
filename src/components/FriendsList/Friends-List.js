import React from 'react';
import Friend from './Friend';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => (
  <ul className="friend-list">
    {friends.map(({ avatar, name, id, isOnline }) => (
      <li className="item" key={id}>
        <Friend avatar={avatar} name={name} isOnline={isOnline} />
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default FriendList;
