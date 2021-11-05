import React, {useState, useEffect} from 'react';
import './App.css';
import Characters from './components/Characters'
import axios from 'axios';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
 const newArray = [
   {
     name: "Jake The star wars character"
   }
 ]

 
const [characters, setCharacters] = useState(newArray)
useEffect(()=>{
  axios.get("https://swapi.dev/api/people")
  .then((res)=>{
    console.log(res.data)
    setCharacters(res.data)
  })
}, [])
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Star Wars</h1>
      <Characters characters={characters} />
    </div>
  );
}

export default App;
