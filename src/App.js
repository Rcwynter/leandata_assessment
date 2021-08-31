import React, {useState, useEffect} from 'react';
import './App.css';
import UserTable from './components/UserTable'
import ExpenseTable from './components/ExpenseTable';
import CompanyExpensesTable from './components/CompanyExpensesTable';

// const API_URL = apilink;

function App() {
  const [userData, setUserData] = useState([]);
  const [expenseData, setExpenseData] = useState([]);

  

  return (
    <div className="App">
      <header>
        <h1 id="title">Company Expense Tables</h1>
      </header>
      <body>
        <UserTable userData={userData} setUserData={setUserData} />
        <ExpenseTable expenseData={expenseData} setExpenseData={setExpenseData} />
        <CompanyExpensesTable />

      </body>
    </div>
  );
}

export default App;
