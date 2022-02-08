import React, { useState } from 'react'
import Phonebook from './components/Phonebook'
import Filter from './components/Filter'
import Form from './components/Form'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number:"1234"},
    { name: 'Ada Lovelace', number: '39-44-5323523'},
    { name: 'Dan Abramov', number: '12-43-234345'},
    { name: 'Mary Poppendieck', number: '39-23-6423122'}
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState("");

  const personsToShow = persons.filter(person => person.name.includes(filter))

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
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handlePhonebookNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

 
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onChange={handleFilter}/>
      <h2>add a new</h2>
      <Form submit={addNew} nameinput={newName} nameonChange={handlePhonebookNameChange} numberinput={newNumber} numberonChange={handlePhonebookNumberChange}/>   
      <h2>Numbers</h2>
      {personsToShow.map(personsToShow =>
          <Phonebook key={personsToShow.name} name={personsToShow.name} number={personsToShow.number} />
        )}
    </div>
  )

}

export default App



