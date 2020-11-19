import React, { useReducer } from 'react';
import GlobalContext from './globalContext';
import globalReducer from './globalReducer';

const GlobalState = (props) => {
  const initialState = {
    transactions: [],
  };

  const [state, dispatch] = useReducer(globalReducer, initialState);

  // Delete Actions
  const deleteTransaction = (id) => {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id,
    });
  };

  // Add Actions
  const addTransaction = (transaction) => {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
