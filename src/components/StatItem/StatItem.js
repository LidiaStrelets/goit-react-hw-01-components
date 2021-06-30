import React from 'react';
import PropTypes from 'prop-types';
import styles from './StatItem.module.css';

const StatItem = ({ id, label, percentage }) => (
  <>
    <span className={styles.type}>{label} </span>
    <span className={styles.percentage}>{percentage}%</span>
  </>
);

StatItem.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.oneOf(['.docx', '.pdf', '.mp3', '.psd', '.pdf']),
  percentage: PropTypes.number,
};

export default StatItem;
