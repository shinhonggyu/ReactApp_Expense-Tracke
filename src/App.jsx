import React from 'react';
import styles from './App.module.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/incomeExpense/IncomeExpenses';

const App = () => {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <Balance />
        <IncomeExpenses />
      </div>
    </div>
  );
};

export default App;
