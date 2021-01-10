import React from 'react';

const HistoryItem = ({ item, amount }) => {
  return (
    <li className='plus'>
      {item}
      <span>{amount}</span>
      <button className='delete-btn'>x</button>
    </li>
  );
};

export default HistoryItem;
