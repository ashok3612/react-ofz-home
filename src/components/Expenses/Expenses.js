import Card from "../Card/Card";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.expenseList.map((obj) => {
        return (
          <ExpenseItem
            title={obj.title}
            price={obj.price}
            date={obj.date}
          ></ExpenseItem>
        );
      })}
    </Card>
  );
};

export default Expenses;
