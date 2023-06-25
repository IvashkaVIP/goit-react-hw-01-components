import React from 'react';
import ReactDOM from 'react-dom/client';

import PropTypes from 'prop-types';
import { TransactionHistoryItem } from './TransactionHistoryItem';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({
  items,
  // id,
  // type,
  // amount,
  // currency
}) => {
  return (
    <table className={css['transaction-history']}>
      <thead className={css.thead}>
        <tr>
          <th className={css.th}>Type</th>
          <th className={css.th}>Amount</th>
          <th className={css.th}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => {
          // console.log(item.amount);
          return (
            <tr key={item.id} className={css.tr}>
              <TransactionHistoryItem
                type={item.type}
                amount={item.amount}
                currency={item.currency}
              />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
  id: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired })),
};
