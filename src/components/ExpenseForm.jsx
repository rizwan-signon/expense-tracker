import React, { useState } from "react";

const ExpenseForm: React.FC<{ onAddExpense: (expense: any) => void }> = ({
  onAddExpense,
}) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !amount || !category) return;
    onAddExpense({ id: Date.now(), title, amount: +amount, category });
    setTitle("");
    setAmount("");
    setCategory("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 flex flex-col gap-2">
      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2"
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border p-2"
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border p-2"
      >
        <option value="">Select Category</option>
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Shopping">Shopping</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white p-2">
        Add Expense
      </button>
    </form>
  );
};

export default ExpenseForm;
