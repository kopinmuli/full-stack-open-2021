import React, { useState, useEffect } from 'react'
import PrintPersons from './components/PrintPersons'
import FilterInput from './components/FilterInput'
import Form from './components/Form'
import service from './services/service'
import Notification from './components/Notification'
import './index.css'


const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState("");
  const [errorMessage, setErrorMessage] = useState(null)

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
        service
          .update(foundId, phonebookObject)
          .then(response =>{
            setPersons(persons.map(person => person.id !== foundId ? person : response))
            foundId=0;
            setErrorMessage(`${newName} is already added to phonebook, updated number`)
            setTimeout(() => {
              setErrorMessage(null)
            }, 10000)
          })
            .catch(error => {alert(`there is no contact called ${newName}, cant update number. please refresh the browser.`)})
          return
      }
    }
      service
      .create(phonebookObject)
      .then(response => {
        console.log(response)
        setPersons(persons.concat(response))
        setErrorMessage(
          `New contact ${newName} created.`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 10000)
      }).catch(error => {alert(`cant create ${newName}, something went wrong, please refresh the browser and try again!`)})
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
      setErrorMessage(
        `Contact ${deleteThis.name} deleted.`
      )
      setTimeout(() => {
        setErrorMessage(null)
      }, 10000)
    }).catch(error => {alert(`there is no contact called ${newName}, cant delete. please refresh the browser.`)}) 
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
      <Notification message={errorMessage} />
      <FilterInput onChange={handleFilter}/>
      <h2>add a new</h2>
      <Form submit={addNew} nameinput={newName} nameonChange={handlePhonebookNameChange} numberinput={newNumber} numberonChange={handlePhonebookNumberChange}/>   
      <h2>Numbers</h2>
      {personsToShow.map(personsToShow =><PrintPersons key={personsToShow.name.toString()} name={personsToShow.name} number={personsToShow.number} onclick={() => handleDelete(personsToShow.id, personsToShow)}/>)}
    </div>
  )

}

export default App



