import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import ExpenseAdd from "../ExpenseAdd/ExpenseAdd";

const NewExpense = (props) => {
  const [useAddForm, setUseAddForm] = useState(true);

  const newAndFormHandler = () => {
    setUseAddForm((prevState) => !prevState);
  };

  if(useAddForm){
    return <ExpenseAdd onAddBtnHandler={newAndFormHandler} />
  }
  return (
    <div className="new-expense">
      <ExpenseForm stateAddHandler={props.stateAddHandler} onCancleHandler={newAndFormHandler}/>
    </div>
  );
};

export default NewExpense;
