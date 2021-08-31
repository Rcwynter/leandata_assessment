import React from 'react';

const UserTable = ({userData, setUserData}) => {
  

  return (
    <div id="UserTable">
    <h2>User Table</h2>
    <h3>User Table Input</h3>
    <form>
      <input type="text" id="first-name-input" placeholder="First Name"></input>
      <input type="text" id="last-name-input" placeholder="Last Name"></input>
      <button type="button">Create User</button>
    </form>
    <table>
        <thead>
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Total Expenses</th>
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

export default UserTable;