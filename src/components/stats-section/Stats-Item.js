import React from 'react';
import PropTypes from 'prop-types';

const Stat = ({ id, label, percentage }) => (
  <>
    <span className="label">{label}</span>
    <span className="percentage">{percentage}</span>
  </>
);

Stat.prototype = {
  id: PropTypes.string.isRequired,
  label: PropTypes.oneOf(['.docx', '.pdf', '.mp3', '.psd', '.pdf']),
  percentage: PropTypes.number,
};

export default Stat;
