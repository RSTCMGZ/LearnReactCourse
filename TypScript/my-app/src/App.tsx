import React from 'react';
import './App.css';
import {Person, Country} from "./components/Person.tsx"
function App() {

  
  return (
    <div className="App">
    <Person
    name="Reso"
    email="reso@reso.com"
    age={27}
    isMarried={true}
    friends= {["reso","mehmet","ahmet"]}
    country= {Country.Turkey}
    />
    </div>
  );
}

export default App;
