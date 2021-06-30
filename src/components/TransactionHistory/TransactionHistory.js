import React from 'react';
import PropTypes from 'prop-types';
import Transaction from '../Transaction/Transaction';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ transactions }) => (
  <table className={styles.table}>
    <thead className={styles.head}>
      <tr>
        <th className={styles.name}>Type</th>
        <th className={styles.name}>Amount</th>
        <th className={styles.name}>Currency</th>
      </tr>
    </thead>

    <tbody className={styles.body}>
      {transactions.map(({ id, type, amount, currency }) => (
        <tr key={id} className={styles.tableRow}>
          <Transaction type={type} amount={amount} currency={currency} />
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
export default TransactionHistory;
