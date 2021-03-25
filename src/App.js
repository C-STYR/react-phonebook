import { useState } from 'react';

import './App.css';
import React from 'react';


function App() {

  const [entries, setEntries] = useState([])

  return (
    <div className="App">
      <Inputs  entries={entries} setEntries={setEntries}/>
      <PhoneBook entries={entries}/>
    </div>
  );
}

function Inputs(props) {
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    phone: ''
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault();

    const entryData = {
      "firstName": state.firstName,
      "lastName": state.lastName,
      "phone": state.phone
    };
    const values = [...props.entries]
    values.push(entryData)
    props.setEntries(values)
    console.log("entries =>", props.entries);
  }
 
  return (
    <div className="inputFields" >
      <form onSubmit={onSubmit} className="form">
        <label>
          First Name:
          <input onChange={onChange} type="text" name="firstName" />
        </label>
        <label>
          Last Name:
          <input onChange={onChange} type="text" name="lastName" />
        </label>
        <label>
          Phone:
          <input onChange={onChange} type="text" name="phone" />
        </label>
        <input className="submit" type="submit" value="Submit"/>
      </form>
    </div>
  )
}


function PhoneBook(props) {

  const entry = props.entries.map(e => {
      let row = (
        <tr>
          <td>{e.firstName}</td>
          <td>{e.lastName}</td>
          <td>{e.phone}</td>
        </tr>
      )
      return row
  })
  
  return (
    <div className="phoneBook">
      <table>
        <thead>
          <tr>
            <th colSpan="3">Phone Book</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Phone</td>
          </tr>
          {entry}
        </tbody>
      </table>
    </div>

  )
}


export default App;
