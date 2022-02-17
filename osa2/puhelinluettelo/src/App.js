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
  const [filter, setFilter] = useState('');
  const [errorMessage, setErrorMessage] = useState(null)
  let personsToShow = persons.filter(person => person.name.toUpperCase().includes(filter.toUpperCase()))

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

    const phonebookObject = {
      name: newName,
      number: newNumber,
    }

    const personFound = personsNames.includes(phonebookObject.name);
    const oldPerson = persons.filter(e => e.name === newName)
    const _id = oldPerson.map(e => e.id)[0]

    if (personFound) {
        window.confirm(
          `${newName} is already on phonebook, want to update number instead?`
        ) &&
              service
                .update(_id, phonebookObject)
                .then(returnedPerson => {
                  setPersons(persons.map(person => person.id !== returnedPerson.id ? person : returnedPerson))
                  setErrorMessage(`${newName} updated.`)
                  setTimeout(() => {
                    setErrorMessage(null)
                  }, 10000)
                })
                .catch(error => {
                  setErrorMessage('Cant find contact from database, please refresh browser and try again')
                  setTimeout(() => {
                    setErrorMessage(null)
                  }, 10000)
                })
           
      } else {
          service
            .create(phonebookObject).then(response => {
            setPersons(persons.concat(response))
            setErrorMessage(
              `New contact ${newName} created.`
            )
            setTimeout(() => {
              setErrorMessage(null)
            }, 10000)
          }).catch(error => {alert(`cant create ${newName}, something went wrong, please refresh the browser and try again!`)}) 
      } 
      setNewName('')
      setNewNumber('')
  }

  const handleDelete = (id, deleteThis) => {
    const newarray=persons.filter(persons => persons.name !== deleteThis)
    service
    .remove(id)
    .then(response =>{
      setPersons(newarray)
      setErrorMessage(
        `Contact ${deleteThis} deleted.`
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
      <PrintPersons filter={filter} persons={persons} deletePerson={handleDelete} />
    </div>
  )

}

export default App



