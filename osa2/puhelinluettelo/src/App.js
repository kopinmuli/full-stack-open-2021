import React, { useState, useEffect } from 'react'
import PrintPersons from './components/PrintPersons'
import FilterInput from './components/FilterInput'
import Form from './components/Form'
import service from './services/service'


const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState("");
  const personsToShow = persons.filter(person => person.name.toUpperCase().includes(filter.toUpperCase()))
  
  useEffect(() => { 
    service
    .getAll()
    .then(response => {
      setPersons(response)
      })
  }, [])

  const addNew = (event) => {
    const personsNames = persons.map(e => e.name)
    event.preventDefault()
    let foundId;
    const phonebookObject = {
      name: newName,
      number: newNumber,
    }
    for(let i = 0; i < persons.length; i++){
      if(phonebookObject.name.toUpperCase() === personsNames[i].toUpperCase()){
        foundId=persons[i].id;
        window.alert(`${newName} is already added to phonebook, updated number`)
        service
          .update(foundId, phonebookObject)
          .then(response =>{
            setPersons(persons.map(person => person.id !== foundId ? person : response))
            foundId=0;
          })
          return
      }
    }
      service
      .create(phonebookObject)
      .then(response => {
        console.log(response)
        setPersons(persons.concat(response))
      })
        setNewName('')
        setNewNumber('')
  }

  const handleDelete = (id, deleteThis) => {
    const newarray=persons.filter(persons => persons !== deleteThis)
    service
    .remove(id)
    .then(response =>{
      console.log(response);
      setPersons(newarray)
    }) 
  }

  const handleFilter = (event) => {
    setFilter(event.target.value);
  };

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
      {personsToShow.map(personsToShow =><><PrintPersons name={personsToShow.name} number={personsToShow.number}/><button key={personsToShow.name} onClick={() => handleDelete(personsToShow.id,personsToShow)}>delete</button></>)}
    </div>
  )

}

export default App



