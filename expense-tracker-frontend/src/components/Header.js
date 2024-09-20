import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/add-expense">Add Expense</Link></li>
        <li><Link to="/advice">Get Advice</Link></li>
      </ul>
    </nav>
  );
}

export default Header;
