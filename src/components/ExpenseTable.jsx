import React from 'react';
import EmployeeOptions from './EmployeeOptions';

const ExpenseTable = ({ userData, setUserData, expenseData, setExpenseData }) => {

  return (
    <div id="expensetable-div">
      <h2>Expense Table Input</h2>
      <form>
        <select id="full-name-select">
          <option value="">Please Select Employee</option>
          {userData.map((user, index) => (<EmployeeOptions key={index} userData={userData}/>))}
        </select>
        <select id="category-select">
          <option value="">Please Select Expense Category</option>
          <option value="Food">Food</option>
          <option value="Travel">Travel</option>
          <option value="Health">Health</option>
          <option value="Supplies">Supplies</option>
        </select>
        <input type="text" id="cost-input" placeholder="Enter Cost Here"></input>
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
        </tbody>
    </table>
    </div>
  )
}

export default ExpenseTable;