import React, { useReducer } from 'react';
import ExpenseContext from './expenseContext';
import expenseReducer from './expenseReducer';
import { ADD_TRANSACTION, REMOVE_TRANSACTION } from './types';

const initialState = {
  transactions: [],
};

const ExpenseState = ({ children }) => {
  const [state, dispatch] = useReducer(expenseReducer, initialState);

  const addTransaction = (transaction) => {
    dispatch({
      type: ADD_TRANSACTION,
      payload: transaction,
    });
  };

  const removeTransaction = (id) => {
    dispatch({
      type: REMOVE_TRANSACTION,
      payload: id,
    });
  };

  return (
    <ExpenseContext.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
        removeTransaction,
      }}>
      {children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseState;
