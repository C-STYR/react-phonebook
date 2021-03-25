import { useState, useEffect } from 'react';

import './App.css';
import React from 'react';


function App() {
  const entries = [{
    firstName: "papa",
    lastName: "bear",
    phone: "bearphone"
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

const test = [
  <tr>
    <td>1</td>
    <td>2</td>
    <td>3</td>
  </tr>,
]

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
  console.log("entry", entry)
  
  return (
    <div className="phoneBook">
      <table>
        <thead>
          <tr>
            <th colSpan="3">Phone Book</th>
          </tr>
        </thead>
        <tbody>
          {entry}
          {test}
        </tbody>
      </table>
    </div>

  )
}


export default App;
