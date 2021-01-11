import React, { useState, useContext } from 'react';
import ExpenseContext from '../context/expenseContext';

const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(ExpenseContext);

  const onAddTransaction = (e) => {
    e.preventDefault();

    if (text.trim() || amount.trim()) {
      const newTransaction = {
        id: new Date().getTime(),
        text,
        amount: +amount,
      };
      addTransaction(newTransaction);
      setText('');
      setAmount(0);
    } else {
      alert('Please fill the fields');
    }
  };
  return (
    <>
      <h3>Add Transactions</h3>
      <form className='form' onSubmit={onAddTransaction}>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input
            type='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder='Enter text ...'
          />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>
            Amount (negative - expense, positive - income)
          </label>
          <input
            type='number'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder='Enter amount ...'
          />
        </div>
        <button type='submit' className='submit-btn'>
          Add transaction
        </button>
      </form>
    </>
  );
};

export default AddTransaction;
