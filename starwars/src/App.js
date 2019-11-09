import React, {useState, useEffect} from 'react';
import axios from "axios";
import CardInfo from "../src/CardInfo";
import './App.css';

const App = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios.get(`https://lambda-swapi.herokuapp.com/api/people/?page=2`)
    .then(response =>  {
      console.log(response.data.results);
      setInfo(response.data.results);
    })
    .catch(error => {
      console.log("Check for errors", error);
    })
  },[])
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
        {info.map(response => {
          return (
            <CardInfo  
              name={response.name}
              hair={response.hair_color} 
              gender={response.gender}/>
          )
        })}
    </div>
  );
}

export default App;
