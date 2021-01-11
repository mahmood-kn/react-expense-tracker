import React, { useContext } from 'react';
import ExpenseContext from '../context/expenseContext';

const IncomeExpense = () => {
  const { transactions } = useContext(ExpenseContext);
  const income =
    transactions === []
      ? '0.00'
      : transactions
          .filter((item) => item.amount > 0)
          .reduce((acc, inc) => (acc += inc.amount), 0)
          .toFixed(2);
  const expense = (transactions === []
    ? '0.00'
    : transactions
        .filter((item) => item.amount < 0)
        .reduce((acc, exp) => (acc += exp.amount), 0) * -1
  ).toFixed(2);
  return (
    <div className='inc-exp-container'>
      <div>
        <h4>income</h4>
        <p className='money plus'>${income}</p>
      </div>
      <div>
        <h4>expense</h4>
        <p className='money minus'>${expense}</p>
      </div>
    </div>
  );
};

export default IncomeExpense;
