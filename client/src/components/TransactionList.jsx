import React, { useContext, useEffect } from 'react';
import GlobalContext from '../context/globalContext';
import Transaction from './Transaction';

const TransactionList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transation) => (
          <Transaction key={transation._id} transaction={transation} />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
