import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PrintPersons from './components/PrintPersons'
import FilterInput from './components/FilterInput'
import Form from './components/Form'





const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState("");
  
  useEffect(() => { 
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])
  
  const handleFilter = (event) => {
    setFilter(event.target.value);
  };

  const addNew = (event) => {
    const personsNames = persons.map(e => e.name)
    event.preventDefault()
    const phonebookObject = {
      name: newName,
      number: newNumber,
      id:persons.length
    }
    for(let i = 0; i < persons.length; i++){
      if(phonebookObject.name === personsNames[i]){
        window.alert(`${newName} is already added to phonebook`)
        return
      }
    }
    setPersons(persons.concat(phonebookObject))
    setNewName('')
    setNewNumber('')
    
  }

  const handlePhonebookNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handlePhonebookNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  
 
  return (
    <div>
      <h2>Phonebook</h2>
      <FilterInput onChange={handleFilter}/>
      <h2>add a new</h2>
      <Form submit={addNew} nameinput={newName} nameonChange={handlePhonebookNameChange} numberinput={newNumber} numberonChange={handlePhonebookNumberChange}/>   
      <h2>Numbers</h2>
      <PrintPersons persons={persons} filter={filter}/>
    </div>
  )

}

export default App



