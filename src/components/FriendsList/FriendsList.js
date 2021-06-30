import React from 'react';
import Friend from '../Friend/Friend';
import PropTypes from 'prop-types';
import styles from './FriendsList.module.css';

const FriendsList = ({ friends }) => (
  <ul className={styles.list}>
    {friends.map(({ avatar, name, id, isOnline }) => (
      <li className={styles.friend} key={id}>
        <Friend avatar={avatar} name={name} isOnline={isOnline} />
      </li>
    ))}
  </ul>
);

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default FriendsList;
