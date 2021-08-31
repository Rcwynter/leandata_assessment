import React, {useState} from 'react';
import EmployeeOptions from './EmployeeOptions';
import ExpenseTableRow from './ExpenseTableRow';

const ExpenseTable = ({ userData, setUserData, expenseData, setExpenseData }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [cost, setCost] = useState("");

  const handleChangeName = (e) => {
    setName(e.target.value);
  }

  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
  }
  
  const handleChangeCost = (e) => {
    setCost(e.target.value);
  }

  const createExpense = (n, c, co) => {
    const expenseObj = {
      name: n,
      category: c,
      cost: co
    };
    setExpenseData([...expenseData, expenseObj]);
  }

  return (
    <div id="expensetable-div">
      <h2>Expense Table Input</h2>
      <form>
        <select value={name} onChange={handleChangeName} id="full-name-select">
          <option value="">Please Select Employee</option>
          {userData.map((user, index) => (<EmployeeOptions key={index} user={user}/>))}
        </select>
        <select value={category} onChange={handleChangeCategory} id="category-select">
          <option value="">Please Select Expense Category</option>
          <option value="Food">Food</option>
          <option value="Travel">Travel</option>
          <option value="Health">Health</option>
          <option value="Supplies">Supplies</option>
        </select>
        <input type="text" value={cost} onChange={handleChangeCost} id="cost-input" placeholder="Enter Cost Here"></input>
        <button type="button" onClick={() => createExpense(name, category, cost)}>Submit Expense</button>
      </form>
      <br></br>
      <table>
        <thead>
        <tr>
            <th>Full Name</th>
            <th>Category</th>
            <th>Cost</th>
        </tr>
        </thead>
        <tbody>
          {
          expenseData.length > 0 ? 
          expenseData.map((expense, index) => (
          <ExpenseTableRow 
          key={index} 
          name={expense.name} 
          category={expense.category} 
          cost={expense.cost} />
          )) :
          <tr>
            <td>Currently No Expense Data</td>
          </tr>
          }
        </tbody>
    </table>
    </div>
  )
}

export default ExpenseTable;