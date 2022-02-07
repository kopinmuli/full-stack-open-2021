import React, { useState } from 'react'

const Phonebook = ({name, number }) => {
  return (
    <p>{name} {number}</p>
  )
}

const checksame = ({name, number }) => {
  var okok = false
console.log(okok);
  return okok
}


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number:"1234", id:0}
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')


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
      <form onSubmit={addNew}>
        <div>
          name: <input 
                  value={newName} 
                  onChange={handlePhonebookNameChange}
                />
        </div>
        <div>number: <input
                       value={newNumber} 
                       onChange={handlePhonebookNumberChange}
                  />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person =>
          <Phonebook key={person.id} name={person.name} number={person.number} />
        )}
    </div>
  )

}

export default App