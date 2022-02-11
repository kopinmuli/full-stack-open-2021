import React,{useState, useEffect} from 'react'
import axios from 'axios'
import Printer from './components/Printer'


console.log(process.env.REACT_APP_WEATHER_API_KEY)


const App = () => {

  const [input, setInput] = useState("")
  const [countries, setCountries] = useState([])
  const countriesMatched = countries.filter(country => country.name.common.toUpperCase().includes(input.toUpperCase()))

  

  const handleInput = (event) => {
    setInput(event.target.value);
    console.log(countriesMatched);
    console.log(input);
  };

 
  useEffect(() => { 
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(country => {
        setCountries(country.data.map(country => country))
      })
  }, [])

  
  return (
   <div>
     find countries <input key="input" onChange={handleInput}></input>
     <Printer key="printer" length={countriesMatched.length} countriesMatched={countriesMatched}/>
   </div>
  );
}

export default App;
