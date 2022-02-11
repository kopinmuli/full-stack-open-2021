import React, { useEffect } from 'react'
import {handleDelete} from '../App';


const PrintPersons = ({name, number, onclick}) => {
    
    return (
      <>
        <p key={name+number}> {name} {number}</p>
        <button key={name} onClick={onclick}>delete</button>
      </>
    )
  }

  export default PrintPersons;