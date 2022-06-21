import React from "react";
import "./style.css";
import Expenses from "./components/Expenses/Expenses";

export default function App() {
  const expenseItemvalue = [
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
      <Expenses expenseList={expenseItemvalue}></Expenses>
    </div>
  );
}
