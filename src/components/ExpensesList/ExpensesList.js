import React from 'react';
import './ExpensesList.css';
import ExpenseItem from '../ExpenseItem/ExpenseItem';

const ExpensesList = (props) => {
  if (props.expenseList.length === 0) {
    return (
      <p style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>
        No Expenses Found !!!
      </p>
    );
  }

  return props.expenseList.map((obj, index) => {
    return (
      <ExpenseItem
        key={index}
        title={obj.title}
        price={obj.price}
        date={obj.date}
      ></ExpenseItem>
    );
  });
};

export default ExpensesList;
