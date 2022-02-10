import React,{useState, useEffect} from 'react'
import axios from 'axios'

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

  export default Weather;