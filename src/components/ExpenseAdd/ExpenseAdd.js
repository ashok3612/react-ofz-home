import "./ExpenseAdd.css";
import Card from "../Card/Card";

const ExpenseAdd = props => {
  return (
    <Card className="add-expense">
      <button onClick={props.onAddBtnHandler} className="add-expense__button">
        Add Expense
      </button>
    </Card>
  );
};

export default ExpenseAdd;
