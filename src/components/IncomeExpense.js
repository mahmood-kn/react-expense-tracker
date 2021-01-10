import React from 'react';

const IncomeExpense = () => {
  return (
    <div className='inc-exp-container'>
      <div>
        <h4>income</h4>
        <p className='money plus'>$0.00</p>
      </div>
      <div>
        <h4>expense</h4>
        <p className='money minus'>$0.00</p>
      </div>
    </div>
  );
};

export default IncomeExpense;
