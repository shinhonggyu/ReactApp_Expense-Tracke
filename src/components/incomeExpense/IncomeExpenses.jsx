import React from 'react';
import styles from './IncomeExpenses.module.css';

const IncomeExpenses = () => {
  return (
    <div className={styles.container}>
      <div>
        <h4>Income</h4>
        <p id="money-plus" className={styles.moneyPlus}>
          +$0.00
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className={styles.moneyMinus}>
          -$0.00
        </p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
