// Reference: https://www.youtube.com/watch?v=T8mqZZ0r-RA
// Utilized and adapted code from this tutorial video, credit to PedroTech

// import react and axios
import React, { useState, useEffect } from "react";
import Axios from 'axios';


// import css
import "./App.css";


// main app body
function App() {

  // get/preserve inputs
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [homeworld, setHomeworld] = useState('')
  const [age, setAge] = useState('')
  const [peopleTable, setPeopleTable] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/getPeople').then((response) => {
      setPeopleTable(response.data);
    });
  }, []);

  // post user inputs and refresh our table
  const addPerson = () => {
    Axios.post('http://localhost:3001/addPerson', {
      fname: fname,
      lname: lname,
      homeworld: homeworld,
      age: age,
    });

    setPeopleTable([
      ...peopleTable,
      { fname: fname, lname: lname, homeworld: homeworld, age: age },
    ]);
  };

  // front-end html
  return (
    <div className="App">
      <h1>CS340 bsg_people React Test App (barebones and overly simplified!!!)</h1>
      <table>
        <tr>
          <th>fname</th>
          <th>lname</th>
          <th>homeworld</th>
          <th>age</th>
        </tr>
      </table>

      {peopleTable.map((val) => {
        return (
          <div className="table">
            <table>
              <tr>
                <td>{val.fname}</td>
                <td>{val.lname}</td>
                <td>{val.homeworld}</td>
                <td>{val.age}</td>
              </tr>
            </table>
          </div>
        );
      })}

      <div className="form">
        <fieldset>
          <legend>Add a new Person</legend>
          <label>fname:</label>
          <input
            type="text"
            name="fname"
            onChange={(e) => {
              setFname(e.target.value);
            }}
          />
          <label>lname:</label>
          <input
            type="text"
            name="lname"
            onChange={(e) => {
              setLname(e.target.value);
            }}
          />
          <label>homeworld:</label>
          <input
            type="number"
            name="homeworld"
            onChange={(e) => {
              setHomeworld(e.target.value);
            }}
          />
          <label>age:</label>
          <input
            type="number"
            name="age"
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
          <button onClick={addPerson}>Add Person</button>
        </fieldset>
      </div>
    </div>
  );
}

export default App;
