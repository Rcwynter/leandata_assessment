import React from 'react';

const EmployeeOptions = ({ userData }) => {

  return (
    <option value={userData.first_name + " " + userData.last_name}></option>
  )
}

export default EmployeeOptions;