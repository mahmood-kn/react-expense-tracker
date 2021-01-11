import React, { useContext } from 'react';
import ExpenseContext from '../context/expenseContext';
import TransactionItem from './TransactionItem';

const History = () => {
  const { transactions } = useContext(ExpenseContext);

  return (
    <>
      <h3>History</h3>
      <ul className='list'>
        {transactions.length === 0 ? (
          <p>Please add transaction</p>
        ) : (
          transactions.map((transaction) => (
            <TransactionItem key={transaction.id} transaction={transaction} />
          ))
        )}
      </ul>
    </>
  );
};

export default History;
