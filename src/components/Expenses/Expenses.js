import React from 'react';
import Card from '../Card/Card';
import './Expenses.css';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';
import ExpensesList from '../ExpensesList/ExpensesList';

const Expenses = (props) => {
  return (
    <div>
      <Card>
        <ExpenseFilter onSetFilterYear={props.onSetFilterYear} />
      </Card>
      <Card className="expenses">
        <ExpensesList expenseList={props.expenseList} />
      </Card>
    </div>
  );
};

export default Expenses;
