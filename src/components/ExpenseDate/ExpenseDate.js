import React from 'react';
import './ExpenseDate.css';

const ExpenseDate = (props) => {
  const date = props.date.toString().split(' ')[2];
  const month = props.date.toString().split(' ')[1];
  const year = props.date.toString().split(' ')[3];

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__month">{date}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
};

export default ExpenseDate;
