import React from 'react';
import PropTypes from 'prop-types';
import defaultPic from './../../data/default.jpg';
import styles from './Profile.module.css';

const Profile = ({ name, tag, location, avatar, stats }) => (
  <div className={styles.card}>
    <div className={styles.mainInfo}>
      <img src={avatar} alt="Аватар пользователя" className={styles.avatar} />
      <p className={styles.name}>{name}</p>
      <p className={styles.nik}>@{tag}</p>
      <p className={styles.location}>{location}</p>
    </div>

    <ul className={styles.stats}>
      <li className={styles.statsItem}>
        <span className={styles.statsCathegory}>Followers: </span>
        <span className={styles.statsQuantity}>{stats.followers}</span>
      </li>
      <li className={styles.statsItem}>
        <span className={styles.statsCathegory}>Views: </span>
        <span className={styles.statsQuantity}>{stats.views}</span>
      </li>
      <li className={styles.statsItem}>
        <span className={styles.statsCathegory}>Likes: </span>
        <span className={styles.statsQuantity}>{stats.likes}</span>
      </li>
    </ul>
  </div>
);
Profile.defaultProps = {
  avatar: defaultPic,
};
Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
