import React from 'react';
import styles from './App.module.css';
import Header from './components/header/Header';
import Balance from './components/balance/Balance';

const App = () => {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <Balance />
      </div>
    </div>
  );
};

export default App;
