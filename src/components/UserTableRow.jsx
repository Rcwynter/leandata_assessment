import React from 'react';

const UserTableRow = ({firstName, lastName, totalExpenses}) => {

  return (
    <tr>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{totalExpenses}</td>
    </tr>
  )
}

export default UserTableRow;