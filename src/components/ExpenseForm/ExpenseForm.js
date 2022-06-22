import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  const [newFormVaues, setNewFormValues] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const formTitleChangeHandler = (e) => {
    setNewFormValues((prevSate) => {
      return {
        ...prevSate,
        title: e.target.value,
      };
    });
    //console.log(newFormVaues);
  };

  const formAmountChangeHandler = (e) => {
    setNewFormValues((prevSate) => {
      return {
        ...prevSate,
        amount: e.target.value,
      };
    });
    //console.log(newFormVaues);
  };

  const formDateChangeHandler = (e) => {
    setNewFormValues((prevSate) => {
      return {
        ...prevSate,
        date: e.target.value,
      };
    });
    //console.log(newFormVaues);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    props.stateAddHandler(newFormVaues);
    clearFormValues();
    props.onCancleHandler();
  };

  const clearFormValues = () => {
    setNewFormValues({
      title: "",
      amount: "",
      date: "",
    });
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={newFormVaues.title}
            onChange={formTitleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="1"
            step="1"
            onChange={formAmountChangeHandler}
            value = {newFormVaues.amount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={formDateChangeHandler}
            value = { newFormVaues.date }
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancleHandler} className="new-expense__cancel">Cancel</button>
        <button type="submit" className="new-expense__addexpense">
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
