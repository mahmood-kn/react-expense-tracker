import React, { useContext } from 'react';
import ExpenseContext from '../context/expenseContext';

const Balance = () => {
  const { transactions } = useContext(ExpenseContext);
  const totalAmount =
    transactions === []
      ? '0.00'
      : transactions.reduce((acc, item) => (acc += item.amount), 0).toFixed(2);
  return (
    <>
      <h4>YOUR BALANCE</h4>
      <h1>${totalAmount}</h1>
    </>
  );
};

export default Balance;
