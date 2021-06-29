import React from 'react';
import PropTypes from 'prop-types';
import defaultPic from './../../data/default.jpg';

const Friend = ({ avatar, name, isOnline }) => (
  <>
    <span className="status">{isOnline}</span>
    <img className="avatar" src={avatar} alt={`${name} photo`} width="48" />
    <p className="name">{name}</p>
  </>
);

Friend.defaultProps = {
  avatar: defaultPic,
};
Friend.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default Friend;
