import { useState } from 'react';

import './App.css';
import React from 'react';


function App() {

  //this array is the "phone book"
  const [entries, setEntries] = useState([]) 

  return (
    <div className="App">
      <Inputs entries={entries} setEntries={setEntries}/>
      <PhoneBook entries={entries}/>
    </div>
  );
}

function Inputs(props) {

  //local state: an individual entry which will be added to 
  //the phone book on form submit
  const [state, setState] = useState({ 
    firstName: '',
    lastName: '',
    phone: ''
  });

  //sets local state to that of text field value for each input
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
    
    //adds new entry to phone book copy
    values.push(entryData);

    //sorts entries by last name
    values.sort((a, b) => a.lastName > b.lastName? 1 : -1)

    //replaces phonebook with updated copy
    props.setEntries(values)
  }
 
  return (
    <div className="inputFields" >
      <form onSubmit={onSubmit} className="form">
        <label>
          First Name:
          <input onChange={onChange} type="text" name="firstName" style={{marginLeft: "10px"}}/>
        </label>
        <br />
        <label>
          Last Name:
          <input onChange={onChange} type="text" name="lastName" style={{marginLeft: "10px"}}/>
        </label>
        <br />
        <label>
          Phone:
          <input onChange={onChange} type="text" name="phone" style={{marginLeft: "42px"}}/>
        </label>
        <br />
        <input className="submit" type="submit" value="Submit"/>
      </form>
    </div>
  )
}


function PhoneBook(props) {

  const entry = props.entries.map((e, index) => {
      return (
        <tr key={index} >
          <td>{e.firstName}</td>
          <td>{e.lastName}</td>
          <td>{e.phone}</td>
        </tr>
      )
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
          <tr >
            <td><strong>First Name</strong></td>
            <td><strong>Last Name</strong></td>
            <td><strong>Phone Number</strong></td>
          </tr>
          {entry}
        </tbody>
      </table>
    </div>
  )
}


export default App;
