import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2020, 5, 7),
  },
  {
    id: "e5",
    title: "Macbook Pro",
    amount: 1199.67,
    date: new Date(2019, 5, 10),
  },
  {
    id: "e6",
    title: "IPhone 13",
    amount: 1213.45,
    date: new Date(2021, 7, 12),
  },
];

const App = () => {

  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const newExpenseDataHandler = (expenseData) => {
    // console.log('From App.js Component: ');
    // console.log(expenseData);
    setExpenses(prevState => {
      return [expenseData, ...prevState]
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={newExpenseDataHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
