import React, { useContext } from 'react';
import ExpenseContext from '../context/expenseContext';

const HistoryItem = ({ transaction }) => {
  const { removeTransaction } = useContext(ExpenseContext);
  const sign = transaction.amount < 0 ? '-' : '+';
  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button
        className='delete-btn'
        onClick={() => removeTransaction(transaction.id)}>
        x
      </button>
    </li>
  );
};

export default HistoryItem;
