import React from 'react';
import Stat from './Stats-Item';
import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => (
  <section className="statistics">
    {title && <h2 className="title">{title}</h2>}
    {/* (<div>({stats})</div>) */}
    <ul className="stat-list">
      {stats.map(({ id, label, percentage }) => (
        <li key={id} className="item">
          <Stat id={id} label={label} percentage={percentage} />
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
