const ExpenseList = ({ expenses }) => {
  return (
    <ul className="p-4">
      {expenses.map((expense) => (
        <li
          key={expense.id}
          className="border p-2 flex justify-between bg-gray-100 mb-2"
        >
          <span>
            {expense.title} - ${expense.amount}
          </span>
          <span className="text-gray-500">{expense.category}</span>
        </li>
      ))}
    </ul>
  );
};

export default ExpenseList;
