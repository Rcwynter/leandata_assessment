import React, {useState} from 'react';
import UserTableRow from './UserTableRow';


const UserTable = ({userData, setUserData, expenseData}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const createUser = (fName, lName) => {
    const userObj = {
      first_name: fName,
      last_name: lName,
      total_expenses: 0
    };
    setUserData([...userData, userObj]);
    setFirstName("");
    setLastName("");
  }
  // expenseData.reduce((acc, expense) => {
  //   return expense.name === fName + " " + lName ? acc + expense.cost : acc;
  // }, 0)


  return (
    <div id="UserTable">
    <h2>User Table</h2>
    <h3>User Table Input</h3>
    <form>
      <input value={firstName} type="text" id="first-name-input" placeholder="First Name" onChange={e => setFirstName(e.target.value)}></input>
      <input value={lastName} type="text" id="last-name-input" placeholder="Last Name" onChange={e => setLastName(e.target.value)}></input>
      <button type="button" onClick={() => createUser(firstName, lastName)}>Create User</button>
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
          {
          userData.length > 0 ? 
          userData.map((item, index) => (
            <UserTableRow 
            key={index} 
            firstName={item.first_name}
            lastName={item.last_name}
            totalExpenses={item.total_expenses}/>
          )) : 
          <tr>
            <td>There are no employees currently</td>
          </tr>
          }
        </tbody>
    </table>
</div>
  )
}

export default UserTable;