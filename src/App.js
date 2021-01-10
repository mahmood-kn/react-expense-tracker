import React from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import Transaction from './components/Transaction';
import AddTransaction from './components/AddTransaction';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpense />
        <Transaction />
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;
