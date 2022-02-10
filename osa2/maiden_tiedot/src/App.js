import React,{useState, useEffect} from 'react'
import axios from 'axios'



const PrintLanguages = ({country}) => {
  const languages = []
  Object.values(country).forEach(language => {
    languages.push(language);
  })
 return(
  <>
  {languages.map(languages =>  <li key={languages}>{languages}</li>)}
  </>
  )
}

const Weather = ({city}) => {

  const api_key = process.env.REACT_APP_API_KEY
  const [weather, setWeather] = useState({})

  useEffect(() => { 
        axios
          .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${city}`)
          .then(response => {
            setWeather(response.data.current)})
        }, 
        [])

console.log(weather);

return(
  <>
  <p><span style={{fontWeight: "bold"}}>Temperature:</span> {weather.temperature} Celsius</p>
  <img src={weather.weather_icons}></img>
  <p><span style={{fontWeight: "bold"}}>Wind:</span> {weather.wind_speed}mph direction {weather.wind_dir}</p>
  </>
)
}

const PrintCountry = ({country}) => {
  
  return(
  <>
    <h1 key={country.name.common}>{country.name.common}</h1>
        <br></br>
        capital {country.capital}
        <br></br>
        population {country.population}
        <br></br>
        <br></br>
        <h3>Languages</h3>
        <PrintLanguages country={country.languages}/>
        <br></br>
        <img src={country.flags.png} alt={country.name.common}></img>
        <h3>Weather in {country.capital}</h3>
        <Weather city={country.capital}></Weather>
        </>
  );}


  const Button = ({ handleClick }) => {
    return (
      <button  onClick={handleClick}>
        show
      </button>
      
    )
  }

const PrintCountries = ({country}) => {
  return(
    <>
    <br></br>
    {country.name.common}
    </>
  );}


  const Filter = ({countriesMatched, length}) => {
    
    console.log(countriesMatched);
 
    
    if (length >= 11) {return(
      <p>Too many matches, specify another filter</p>
      )}
    if (length === 1) {return(
      <PrintCountry country={countriesMatched[0]}/>
      )}
    

    return(
      <p>
      {countriesMatched.map(countriesToPrint =>
      <>
      <PrintCountries country={countriesToPrint}/>
      <Button key={countriesToPrint.name.common}/>
      </>)}
      
      </p>
    );}




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
     find countries <input onChange={handleInput}></input>
     <Filter length={countriesMatched.length} countriesMatched={countriesMatched}/>
   </div>
  );
}

export default App;
