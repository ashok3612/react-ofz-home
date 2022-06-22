import "./ExpenseItem.css";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from "../Card/Card";
import { useState } from "react";

const ExpenseItem = (props) => {
  const title = props.title;

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.price}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
