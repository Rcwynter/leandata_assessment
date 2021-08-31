import React from 'react';

const ExpenseTableRow = ({ name, category, cost }) => {


  return (
    <tr>
      <td>{name}</td>
      <td>{category}</td>
      <td>{cost}</td>
    </tr>
  )
}



export default ExpenseTableRow;