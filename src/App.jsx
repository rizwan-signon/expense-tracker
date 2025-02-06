import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-xl mx-auto p-4">
        <ExpenseForm onAddExpense={addExpense} />
        <ExpenseList expenses={expenses} />
      </div>
    </div>
  );
};

export default App;
