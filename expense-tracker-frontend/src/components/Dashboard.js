import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Dashboard() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/expenses/`)
      .then(response => setExpenses(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>Expense Dashboard</h1>
      <ul>
        {expenses.map(expense => (
          <li key={expense.id}>{expense.title} - {expense.amount}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
