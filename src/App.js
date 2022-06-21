import React from "react";
import "./style.css";
import ExpenseItem from "./components/ExpenseItem/ExpenseItem";

export default function App() {
  const ExpenseItemvalue = [
    {
      title: "Bike Insurance",
      price: "$350",
      date: new Date(),
    },
    {
      title: "Car Insurance",
      price: "$9470",
      date: new Date(2022, 12.3),
    },
    {
      title: "Washing",
      price: "$870",
      date: new Date(2021, 3, 12),
    },
    {
      title: "Cleaning",
      price: "$950",
      date: new Date(2019, 5, 15),
    },
  ];

  return (
    <div>
      {ExpenseItemvalue.map((obj) => (
        <ExpenseItem
          title={obj.title}
          price={obj.price}
          date={obj.date}
        ></ExpenseItem>
      ))}
    </div>
  );
}
