import './App.css';
import UserTable from './components/UserTable'
import ExpenseTable from './components/ExpenseTable';
import CompanyExpensesTable from './components/CompanyExpensesTable';

// const API_URL = apilink;

function App() {

  

  return (
    <div className="App">
      <header>
        <h1 id="title">Company Expense Tables</h1>
      </header>
      <body>
        <UserTable />
        <ExpenseTable />
        <CompanyExpensesTable />

      </body>
    </div>
  );
}

export default App;
