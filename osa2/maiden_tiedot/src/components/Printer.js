import Weather from "./Weather";


const Button = ({ handleClick }) => {
  return (
    <button  onClick={handleClick}>
      show
    </button>
    
  )
}

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
  
    
  
  const PrintCountries = ({country}) => {
    return(
      <>
      <br></br>
      {country.name.common}
      </>
    );}


const Printer = ({countriesMatched, length}) => {
    
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

    export default Printer;
