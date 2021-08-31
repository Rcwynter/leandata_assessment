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
      <div>
        <UserTable userData={userData} setUserData={setUserData} />
        <ExpenseTable 
        userData={userData} 
        setUserData={setUserData} 
        expenseData={setExpenseData}
        setExpenseData={setExpenseData} />
        <CompanyExpensesTable />

      </div>
    </div>
  );
}

export default App;
