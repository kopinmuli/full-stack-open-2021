import React, { useEffect } from 'react'
import App from '../App';


const PrintPersons = ({name, number}) => {
    
    return (
      <>
        <p key={name}> {name} {number}</p>
      </>
    )
  }

  export default PrintPersons;