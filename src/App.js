import React, { useState } from "react";
import "./style.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpenseAdd from "./components/ExpenseAdd/ExpenseAdd";

export default function App() {
  const DUMMY_ARRAY = [
    {
      title: "Bike Insurance",
      price: "350",
      date: new Date(),
    },
    {
      title: "Car Insurance",
      price: "9470",
      date: new Date(2021, 11, 3),
    },
    {
      title: "Washing",
      price: "870",
      date: new Date(2021, 3, 12),
    },
    {
      title: "Cleaning",
      price: "950",
      date: new Date(2019, 4, 27),
    },
  ];
  const [expenseList, setExpenseList] = useState(DUMMY_ARRAY);
  const [filteredExpenseList, setFilteredExpenseList] = useState(DUMMY_ARRAY);
  const [filteredYear, setFilteredYear] = useState("");

  // const [filterYear, setFilterYear] = useState("");

  const addItemToExpenseList = (obj) => {
    setExpenseList((prevState) => {
      return [
        ...prevState,
        {
          title: obj.title,
          price: obj.amount,
          date: new Date(obj.date),
        },
      ];
    });
    if (filteredYear === "" || new Date(obj.date).getFullYear() === +filteredYear) {
      setFilteredExpenseList((prevState) => {
        return [
          ...prevState,
          {
            title: obj.title,
            price: obj.amount,
            date: new Date(obj.date),
          },
        ];
      });
    }
  };

  const filterYearChangeHandler = (year) => {
    //  setFilterYear(year);
    const filteredList = expenseList.filter((expense) => {
      return year == "" || expense.date.toString().split(" ")[3] === year;
    });
    setFilteredYear(year);
    setFilteredExpenseList(filteredList);
  };

  return (
    <div>
      <NewExpense stateAddHandler={addItemToExpenseList} />
      <Expenses
        filteredList={filteredExpenseList}
        onSetFilterYear={filterYearChangeHandler}
      ></Expenses>
    </div>
  );
}
