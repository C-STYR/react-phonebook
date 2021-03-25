import { useState } from 'react';

import './App.css';
import React from 'react';


function App() {
  const entries = [{
    firstName: 'Cole',
    lastName: 'Styron',
    phone: '555-555-5555'
  }];

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
    const {name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (state.firstName.length && state.lastName.length && state.phone.length) {
      const entryData = {
        "firstName": state.firstName,
        "lastName": state.lastName,
        "phone": state.phone
      }
      state.entries.push(entryData)
    }
  }

  return (
    <div className="inputFields" >
      <form onSubmit={onSubmit} className="form">
        <label>
          First Name:
          <input onChange={onChange} type="text" name="first name" value={state.firstName}/>
        </label>
        <label>
          Last Name:
          <input onChange={onChange} type="text" name="last name" value="last name"/>
        </label>
        <label>
          Phone:
          <input onChange={onChange} type="text" name="phone" value="phone number"/>
        </label>
        <input className="submit" type="submit" value="Submit"/>
      </form>
    </div>
  )
}

function PhoneBook() {
  return (
    <h1>Phone Book:</h1>
  )
}

export default App;
