import React from 'react';
import TransactionItem from './TransactionItem';

const History = () => {
  return (
    <>
      <h3>History</h3>
      <ul className='list'>
        <TransactionItem item='camera' amount='+400' />
      </ul>
    </>
  );
};

export default History;
