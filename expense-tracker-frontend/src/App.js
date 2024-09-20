import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import AddExpense from './components/AddExpense';
import FinancialAdvice from './components/FinancialAdvice';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/add-expense" component={AddExpense} />
        <Route path="/advice" component={FinancialAdvice} />
      </Switch>
    </Router>
  );
}

export default App;