import React from 'react';

const EmployeeOptions = ({ user }) => {

  return (
    <option value={user.first_name + " " + user.last_name}>{user.first_name + " " + user.last_name}</option>
  )
}

export default EmployeeOptions;