import React from "react";
import "./NewExpense.css";
import ExpenseForm from "../ExpenseForm/ExpenseForm";

const NewExpense = (props) => {
  return (
    <div className="new-expense">
      <ExpenseForm stateAddHandler={props.stateAddHandler} onCancleHandler={props.onCancleHandler}/>
    </div>
  );
};

export default NewExpense;
