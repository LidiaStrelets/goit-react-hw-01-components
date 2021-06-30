import React from 'react';
import PropTypes from 'prop-types';
import defaultPic from './../../data/default.jpg';
import styles from './Friend.module.css';

// const statusColor = {
//   green: '#008000',
//   red: '#ff0000',
// };

const Friend = ({ avatar, name, isOnline }) => {
  // let statusColor;

  return (
    <>
      <span className={styles.status} style={{ backgroundColor: isOnline ? '#008000' : '#ff0000' }}>
        {isOnline}
      </span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </>
  );
};

Friend.defaultProps = {
  avatar: defaultPic,
};
Friend.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default Friend;
