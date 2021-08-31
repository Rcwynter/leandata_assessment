import React from 'react';

const ExpenseTable = () => {

  return (
    <div id="expensetable-div">
      <h2>Expense Table Input</h2>
      <form>
        <select id="full-name-select">
          <option value="">Please Select Employee</option>
          <option value="Mock Data">Mock Data</option>
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
      <table>
        <thead>
        <tr>
            <th>Full Name</th>
            <th>Category</th>
            <th>Cost</th>
        </tr>
        </thead>
        <tbody>
            <tr>
                <td/>
                <td/>
                <td/>
                <td/>
            </tr>
        </tbody>
    </table>
    </div>
  )
}

export default ExpenseTable;