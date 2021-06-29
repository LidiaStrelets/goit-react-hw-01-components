import React from 'react';
import PropTypes from 'prop-types';
import Transaction from './oneTransaction';

const TransactionHistory = ({ transactions }) => (
  <table className="transaction-history">
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      {transactions.map(({ id, type, amount, currency }) => (
        <tr key={id}>
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
