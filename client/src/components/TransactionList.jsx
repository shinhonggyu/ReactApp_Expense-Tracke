import React, { useContext } from 'react';
import GlobalContext from '../context/globalContext';
import Transaction from './Transaction';

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transation) => (
          <Transaction key={transation.id} transaction={transation} />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
