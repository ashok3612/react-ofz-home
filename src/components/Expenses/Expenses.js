import Card from "../Card/Card";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./Expenses.css";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import { useState } from "react";
import ExpensesList from "../ExpensesList/ExpensesList";

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
