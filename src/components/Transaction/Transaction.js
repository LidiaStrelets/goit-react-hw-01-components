import React from 'react';
import PropTypes from 'prop-types';
import styles from './Transaction.module.css';

const Transaction = ({ type, amount, currency }) => (
  <>
    <td className={styles.type}>{type}</td>
    <td className={styles.tableItem}>{amount}</td>
    <td className={styles.tableItem}>{currency}</td>
  </>
);

Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
export default Transaction;
