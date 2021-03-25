import { useState } from 'react';

import './App.css';
import React from 'react';


function App() {
  const entries = [];
  return (
    <div className="App">
      <Inputs entries={entries}/>
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

    props.entries.push(entryData);
    console.log(props.entries, "I've submitted");
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

  const display = () => {
    const entry = props.entries.map(e => {
      return (
        <tr>
          <td>props.entries.firstName</td>
          <td>props.entries.lastName</td>
          <td>props.entries.phone</td>
        </tr>
      )
    })
    return entry;
  }
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th colSpan="3">Phone Book</th>
          </tr>
        </thead>
        {display()}
      </table>
    </div>

  )
}

export default App;
