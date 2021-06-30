import React from 'react';
import StatItem from '../StatItem/StatItem';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
import createRandomColor from '../../randomColor';

console.log(createRandomColor(), 'hi!');
const Statistics = ({ title, stats }) => (
  <section className={styles.section}>
    <div className={styles.container}>{title && <h2 className={styles.title}>{title}</h2>}</div>
    <ul className={styles.stats}>
      {stats.map(({ id, label, percentage }) => (
        <li key={id} className={styles.StatItem} style={{ backgroundColor: createRandomColor() }}>
          <StatItem id={id} label={label} percentage={percentage} />
        </li>
      ))}
    </ul>
  </section>
);

Statistics.defaultProps = {
  title: '',
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
export default Statistics;
