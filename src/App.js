import React from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import Transactions from './components/Transactions';
import AddTransaction from './components/AddTransaction';

import ExpenseState from './context/ExpenseState';
import './App.css';

function App() {
  return (
    <ExpenseState>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpense />
        <Transactions />
        <AddTransaction />
      </div>
    </ExpenseState>
  );
}

export default App;
