import React from "react";
import Card from "../Card/Card";
import "./Expenses.css";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ExpensesList from "../ExpensesList/ExpensesList";
import ExpenseChart from "../ChartComp/ExpenseChart/ExpenseChart";

const Expenses = (props) => {
  return (
    <div>
      <Card>
        <ExpenseFilter onSetFilterYear={props.onSetFilterYear} />
      </Card>
      <Card>
        <ExpenseChart expenses={props.filteredList} />
      </Card>
      <Card className="expenses">
        <ExpensesList expenseList={props.filteredList} />
      </Card>
    </div>
  );
};

export default Expenses;
